class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      redirect_to books_path
    else
      render :new
    end
  end

  def show
    @books = Book.find(params[:id])
  end

  private
  def book_params
    params.required(:book).permit(
      :title,
      :author,
      :publisher,
      :genre
    )
  end

end
