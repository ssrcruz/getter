class Api::V1::BlogsController < Api::V1::BaseController
  def index
    respond_with Blog.all
  end

  def create
    respond_with :api, :v1, Blog.create(blog_params)
  end

  def destroy
    respond_with Blog.destroy(params[:id])
  end

  def update
    blog = Blog.find(params["id"])
    blog.update_attributes(blog_params)
    respond_with blog, json: blog
  end

  def show
    blog = Blog.find(params["id"])
    respond_with blog, json: blog
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :description)
  end
end
