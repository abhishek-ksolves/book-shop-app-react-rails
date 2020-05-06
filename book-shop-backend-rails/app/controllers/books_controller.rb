# class BooksController < ApplicationController
#   before_action :set_book, only: [:show, :edit, :update, :destroy]

#   # GET /books
#   # GET /books.json
#   def index
#     @books = Book.all
#     render json: @books
#   end

#   # GET /books/1
#   # GET /books/1.json
#   def show
#     reder json: @book
#   end

#   # GET /books/new
#   def new
#     @book = Book.new
#   end

#   # GET /books/1/edit
#   def edit
#   end

#   # POST /books
#   # POST /books.json
#   def create
#     @book = Book.new(book_params)

#     respond_to do |format|
#       if @book.save
#         # render json: @book, status: :created
#         format.html { redirect_to @book, notice: 'Book was successfully created.' }
#         format.json { render :show, status: :created, location: @book }
#       else
#         # render json: {status: "error", code: 400, message: "Something went wrong."}
#         format.html { render :new }
#         format.json { render json: @book.errors, status: :unprocessable_entity }
#       end
#     end
#   end

#   # PATCH/PUT /books/1
#   # PATCH/PUT /books/1.json
#   def update
#     respond_to do |format|
#       if @book.update(book_params)
#         format.html { redirect_to @book, notice: 'Book was successfully updated.' }
#         format.json { render :show, status: :ok, location: @book }
#       else
#         format.html { render :edit }
#         format.json { render json: @book.errors, status: :unprocessable_entity }
#       end
#     end
#   end

#   # DELETE /books/1
#   # DELETE /books/1.json
#   def destroy
#     @book.destroy
#     respond_to do |format|
#       format.html { redirect_to books_url, notice: 'Book was successfully destroyed.' }
#       format.json { head :no_content }
#     end
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_book
#       @book = Book.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def book_params
#       params.require(:book).permit(:name, :description, :author, :image)
#     end
# end


class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]

  # GET /books
  # GET /books.json
  def index
    @books = Book.all
    # render json: @books.order(:name)
    render json: @books.with_attached_image
  end

  # GET /books/1
  # GET /books/1.json
  def show
    # binding.pry
    render json: @book
  end

  # GET /books/new
  def new
    @book = Book.new
  end

  # GET /books/1/edit
  def edit
  end

  # POST /books
  # POST /books.json
  def create
    # binding.pry
    @book = Book.new(book_params)
    # @book.image.attach(book_params[:image])
    # @book.image.attach io: File.open(book_params[:image]), filename: book_params[:image], content_type: "image/jpg"

    # binding.pry

    # respond_to do |format|
      if @book.save
        # @book.image.attach(params[:image])
        render json: @book, status: :created
        # format.html { redirect_to @book, notice: 'Book was successfully created.' }
        # format.json { render :show, status: :created, location: @book }
      else
        render json: {status: "error", code: 400, message: "Something went wrong."}
        # format.html { render :new }
        # format.json { render json: @book.errors, status: :unprocessable_entity }
      end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    # binding.pry
    # respond_to do |format|
      if @book.update(book_params)
        render json: @book
        # format.html { redirect_to @book, notice: 'Book was successfully updated.' }
        # format.json { render :show, status: :ok, location: @book }
      else
        render json: {status: "error", code: 400, message: "Something went wrong."}
        # format.html { render :edit }
        # format.json { render json: @book.errors, status: :unprocessable_entity }
      end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book.destroy
    #render json: {status: "error", code: 300, message: "Deleted"}
    # respond_to do |format|
      # format.html { redirect_to books_url, notice: 'Book was successfully destroyed.' }
      # format.json { head :no_content }
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      # binding.pry
      # ActiveModelSerializers::Deserialization.jsonapi_parse!(params,
      #   only: [:name, :description, :author, :image])
      params.require(:book).permit(:name, :description, :author, :image)
    end
end