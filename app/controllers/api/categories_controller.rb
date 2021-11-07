class Api::CategoriesController < ApplicationController
    def create
        @category = Category.new(category_params)
        @category.save
    end

    def index
        @categories = Category.all
        render :index
    end

    private

    def category_params
        params.require(:category).permit(:title, :body, :photo)
    end
end
