class Api::AdventuresController < ApplicationController
    def index
    @adventures = Adventure.all
    
    render json: @adventures
    end

    def show
    @adventure = Adventure.find(params[:id])

    render json: @adventure
    end

    def create
    @adventure = Adventure.create!(adventure_params)

    render json: @adventure
    end

    def update
    @adventure = Adventure.update!(adventure_params)

    render json: @adventure
    end

    def destroy

    end
end
