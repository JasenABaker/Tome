import React from 'react'
import CreatureList from './CreatureList'
import {MonsterCardContainer} from './styled components/Containers'


const creatureArray = []
const EncountersTab = (props) => {
    { props.creatures.find((creature)=>{
        if (creature.encounter_id === props.encounter.id) {
        creatureArray.push(creature)
        } else {
            return creature
        }
        console.log(creatureArray)
    })}
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
            {props.encounter.dangers.map((danger)=>{
                return(
                    <details>
                <summary>{danger.title}</summary>
                <p>{danger.description}</p>
            </details>
                )

            })}
            {props.encounter.additional_info.map((info)=>{
                return(
                    <details>
                <summary>{info.title}</summary>
                <p>{info.description}</p>
            </details>
                )

            })}
            {props.encounter.treasures.map((tru)=>{
                return(
                    <details>
                <summary>Treasure</summary>
                <p>{tru.description}</p>
            </details>
                )

            })}
            <details>
                <summary>Developments</summary>
                <p>{props.encounter.developements}</p>
            </details>
            <details>
                <summary>Creatures</summary>
            <MonsterCardContainer>
            {creatureArray.map((creature)=>{
                return(
                    <CreatureList creature={creature}/>
                )
            })}
            </MonsterCardContainer>
            </details>
        </details>
    )

}

export default EncountersTab