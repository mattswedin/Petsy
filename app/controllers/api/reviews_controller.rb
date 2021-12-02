class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        @review.pet_id = Pet.find_by(id: params[:id]).id
        if @review.save
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index
        @reviews = Review.all
        render :index
    end

    private

    def review_params
        params.require(:review).permit(:body, :ranking)
    end

end
