class Api::EncounterController < ApplicationController
    def index
        @encounters = Encounter.all
        
        render json: @encounters
        end
    
        def create
        @encounter = Encounter.create!(encounter_params)
    
        render json: @encounter
        end
    
        def update
        @encounter = Encounter.find(params[:id])
        @encounter.update!(encounter_params)
    
        render json: @encounter
        end
    
        def destroy
        @encounter = Encounter.find(params[:id]).destroy
        render status: :ok
        end
    
        private
        def encounter_params
            params.require(:encounter).permit(:location, :map_location_number, :developments, :intro, :treasures, :chapter_id, dangers: [:title, :description], additional_info: [:title, :description], sub_locations: [:title, :map_location, :instructions], descriptions: [])
        end

end
