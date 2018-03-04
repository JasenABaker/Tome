import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Dialog from 'react-dialog'
import { MonsterCardContainer } from './styled components/Containers'




class EncountersTab extends Component {
    state = {
        isDialogOpen: false
    }
    
handleMonsterClick = (creature) => {
    if (this.state.isDialogOpen){
        this.props.handleMonsterClose()
        this.setState({isDialogOpen: false})
    } else{
    this.props.handleMonsterOpen(creature)
    this.setState({isDialogOpen: true})
    } 
}

    
    render() {
        const creatureArray = []
        let developments = null
        let creatures = null
        let treasures = null
    {
        this.props.creatures.find((creature) => {
            if (creature.encounter_id === this.props.encounter.id) {
                creatureArray.push(creature)
            } else {
                return creature
            }
            console.log(creatureArray)
        })
    }

    if (this.props.encounter.developments !==""){
        developments = ()=>{ return (
            <details>
            <summary>Developments</summary>
            <p>{this.props.encounter.developements}</p>
        </details>

        )}
        developments()
    } else {
        developments = null
    }

    if(this.props.encounter.treasures !== ""){
        treasures = 
                <details>
                <summary>Treasure</summary>
                <p>{this.props.encounter.treasures}</p>
            </details>
    
    }else {
        treasures = null
    }

    if (creatureArray.length < 1) {
        creatures = null
    } else if (creatureArray.length >= 1){
        creatures =  <details>
        <summary>Creatures</summary>
        <MonsterCardContainer>
            {creatureArray.map((creature) => {

                return(
                    <div>
                        <h3>{creature.creatures.name}</h3>
                        <h4>Number of {creature.creatures.name}: {creature.count}</h4>
                        <h4><span>HP: </span>{creature.creatures.hit_points}</h4>
                        <h4><span>AC: </span>{creature.creatures.armor_class}</h4>
                        <button onClick={()=>this.handleMonsterClick(creature.creatures)}>Monter stats </button>
                    </div>
                )
            })
            }
        </MonsterCardContainer>
    </details>

    } else {
        creatures = null
    }

    
    return ( 
    
        <details>
            <summary>{this.props.encounter.location}</summary>
            <details>
                <p>{this.props.encounter.intro}</p>
            </details>
            { this.props.encounter.descriptions.map((des) => {
                return (
                    <details>
                        <p>{des}</p>
                    </details>
                )
            })}
            {this.props.encounter.dangers.map((danger) => {
                return (
                    <details>
                        <summary>{danger.title}</summary>
                        <p>{danger.description}</p>
                    </details>
                )

            })}
            {this.props.encounter.additional_info.map((info) => {
                return (
                    <details>
                        <summary>{info.title}</summary>
                        <p>{info.description}</p>
                    </details>
                )

            })}


        {treasures}
        {developments}
        {creatures}
        
        </details>


)

}
}
export default EncountersTab