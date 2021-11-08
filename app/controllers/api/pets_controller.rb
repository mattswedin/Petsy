class Api::PetsController < ApplicationController
    def create
        @pet = Pet.new(pet_params)
        @pet.owner_id = params[:owner_id]
        if @pet.save
            render `users/#{owner_id}`
        else
            render json: @pet.errors.full_messages, status: 422
        end
    end

    def show
        
    end

    def index
    end

    def update
    end

    def edit
    end

    def destroy
    end

    private
end