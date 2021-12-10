class Api::CartsController < ApplicationController

    def create
        @cart = Cart.new()
        @cart.user_id = current_user.id
        @user = current_user
        @user.current_order = @cart.id
        if @cart.save && @user.save
            render :show
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end

    def index
        @carts = Cart.all
        render :index
    end

    def show
        @cart = Cart.find_by(id: params[:id])
        render :show
    end

    
end
