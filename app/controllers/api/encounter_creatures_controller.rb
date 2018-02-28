class Api::EncounterCreaturesController < ApplicationController
    def index
        @encounter_creatures = EncounterCreature.all
        
        render json: @encounter_creatures
        end
    
    def show
        @encounter_creature = EncounterCreature.find(:id)

        render json: @encounter_creature

    end
        def create
        @encounter_creature = EncounterCreature.create!(encounter_creature_params)
    
        render json: @encounter_creature
        end
    
        def update
        @encounter_creature = EncounterCreature.find(params[:id])
        @encounter_creature.update!(encounter_creature_params)
    
        render json: @encounter_creature
        end
    
        def destroy
        @encounter_creature = EncounterCreature.find(params[:id]).destroy
        render status: :ok
        end
    
        private
        def encounter_creature_params
            params.require(:encounter_creature).permit(:encounter_id, :count, creatures: {})
        end


end
