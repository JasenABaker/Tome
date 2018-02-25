class Api::AdventuresController < ApplicationController
    def index
    @adventures = Adventure.all
    
    render json: @adventures
    end

    def show
    @adventure = Adventure.find(params[:id])
    @hooks = @adventure.hooks.all
    @info = @adventure.adv_addtional_infos.all

    render json: @adventure @hooks @info
    end

    def create
    @adventure = Adventure.create!(adventure_params)

    render json: @adventure
    end

    def update
    @adventure = Adventure.find(params[:id])
    @adventure.update!(adventure_params)

    render json: @adventure
    end

    def destroy
    @adventure = Adventure.find(params[:id]).destroy
    render status: :ok
    end

    private
    def adventure_params
        params.require(:adventure).permit(:title, :intro, :synopsis, :running_the_adventure, :map)
    end
end
