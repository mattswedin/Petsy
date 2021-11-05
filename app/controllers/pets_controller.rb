class PetsController < ApplicationController
    def create
        @pet = Pet.new(pet_params)

        if @pet.save
            @pet.owner_id = params[:owner_id]
            render "pets/show"
        else
            render json: @pet.errors.full_messages, status: 422
        end
    end

    def index
        @pets = Pet.all
        render "pets/index"
    end

    def show
        @pet = Pet.find(params[:id])
    end

    def update
    end

    def destroy
        @pet = current_user.pets.find_by(id: params[:id])
        if @pet
            @pet.destroy
            render `api/users/show`
        else
            render `api/users/show`
        end

    end

    def pet_params
        params.require(:pet).permit(:name, :color, :class, :species)
    end
end
