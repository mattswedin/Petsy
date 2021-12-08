class Api::CartItemsController < ApplicationController
    def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
        
    end

    def show
        @cart_item = CartItem.find_by(id: params[:id])
        render :show
    end

    def index
        @cart_items = CartItem.all
        render :index
    end
    def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.destroy
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def cart_item_params
        params.require(:cart_item).permit(:pet_id, :cart_id, :can_adopt)
    end
end