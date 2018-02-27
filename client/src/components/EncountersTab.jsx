import React from 'react'
import { Link } from 'react-router-dom'
import CreatureList from './CreatureList'
import { MonsterCardContainer } from './styled components/Containers'


const creatureArray = []
let developments = null
let creatures = null
const EncountersTab = (props) => {
    {
        props.creatures.find((creature) => {
            if (creature.encounter_id === props.encounter.id) {
                creatureArray.push(creature)
            } else {
                return creature
            }
            console.log(creatureArray)
        })
    }

    if (props.encounter.developments){
        developments = ()=>{ return (
            <details>
            <summary>Developments</summary>
            <p>{props.encounter.developements}</p>
        </details>

        )}
    } else {
        developments = null
    }

    if (creatureArray.length < 1) {
        creatures = null
    } else if (creatureArray.length >= 1){
        creatures =  <details>
        <summary>Creatures</summary>
        <MonsterCardContainer>
            {creatureArray.map((creature) => {
                return(
                [...Array(creature.count)].map((e) =>
                
                    <div>
                        <Link to={`/creature/${creature.id}`}><h3>{creature.creatures.name}</h3></Link>
                        <h4><span>HP: </span>{creature.creatures.hit_points}</h4>
                        <h4><span>AC: </span>{creature.creatures.armor_class}</h4>
                    </div>
                )
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
            <summary>{props.encounter.location}</summary>
            <details>
                <p>{props.encounter.intro}</p>
            </details>
            {props.encounter.descriptions.map((des) => {
                return (
                    <details>
                        <p>{des}</p>
                    </details>
                )
            })}
            {props.encounter.dangers.map((danger) => {
                return (
                    <details>
                        <summary>{danger.title}</summary>
                        <p>{danger.description}</p>
                    </details>
                )

            })}
            {props.encounter.additional_info.map((info) => {
                return (
                    <details>
                        <summary>{info.title}</summary>
                        <p>{info.description}</p>
                    </details>
                )

            })}
            {props.encounter.treasures.map((tru) => {
                return (
                    <details>
                        <summary>Treasure</summary>
                        <p>{tru.description}</p>
                    </details>
                )

            })}
        {developments}
        {creatures}
        </details>
    )

}

export default EncountersTab