class Api::CartItemsController < ApplicationController
    def create
        @cart_item = CartItem.new(cart_item_params)
        @cart_item.cart_id = Cart.find(id: params[:id])
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

    def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.destroy
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def cart_item_params
        params.require(:cart_item).permit(:pet_id)
    end
end