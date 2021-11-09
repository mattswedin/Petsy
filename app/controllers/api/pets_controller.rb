class Api::PetsController < ApplicationController


    def create
        @pet = Pet.new(pet_params)
        @pet.owner_id = current_user.id
        if @pet.save
            render :show
        else
            render json: @pet.errors.full_messages, status: 422
        end
    end

    def show
        @pet = Pet.find_by(id: params[:id])
        render :show
    end

    def index
        @pets = Pet.all
    end

    def update
        @pet = Pet.find_by(id: params[:id])

        if @pet.update(pet_params)
        render :show
        else
        render json: @pet.errors.full_messages, status: 422
        end

    end


    def destroy
        @pet = Pet.find_by(id: params[:id])
        if @pet.destroy
            render :index
        else
            render json: @pet.errors.full_messages, status: 422
        end
    end

    private

    def pet_params
        params.require(:pet).permit(:name, :color, :kind, :size)
    end

end