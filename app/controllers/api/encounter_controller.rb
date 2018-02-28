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
            params.require(:encounter).permit(:locations, :map_location_number, :developments, :intro, :descriptions, :dangers,
            :additional_info, :sub_locations, :treasures, :chapter_id)
        end

end
