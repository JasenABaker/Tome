class Api::EncounterCreaturesController < ApplicationController
    def index
        @encounter_creatures = Encounter_Creature.all
        
        render json: @encounter_creatures
        end
    
        def create
        @encounter_creature = Encounter_Creatures.create!(encounter_creature_params)
    
        render json: @encounter_creature
        end
    
        def update
        @encounter_creature = Encounter_Creatures.find(params[:id])
        @encounter_creature.update!(encounter_creature_params)
    
        render json: @encounter_creature
        end
    
        def destroy
        @encounter_creature = Encounter_Creatures.find(params[:id]).destroy
        render status: :ok
        end
    
        private
        def encounter_creature_params
            params.require(:encounter_creature).permit(:creatures)
        end


end
