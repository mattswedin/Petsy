class Api::PetpointsController < ApplicationController

    def create
        @petpoint = Petpoint.new(point_params)
        @petpoint.petter_id = current_user.id
        if @petpoint.save
            render :show
        else
            render json: @petpoint.errors.full_messages, status: 422
        end
    end

    def index
        @petpoints = Petpoint.all
    end

    def point_params
        params.require(:petpoint).permit(:pet_id)
    end

end
