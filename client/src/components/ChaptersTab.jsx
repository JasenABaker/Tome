import React from 'react'
import EncountersTab from './EncountersTab'



const ChaptersTab = (props)=>{
    return(
        <details>
            <summary>{props.chapter.title}</summary>
            <details>
                <p>{props.chapter.intro}</p>
            </details>
            {props.chapter.instructions.map((inst)=>{
                return(
                <details>
                    <summary>{inst.title}</summary>
                    <p>{inst.description}</p>
                </details>
                )
            })}
            {props.chapter.descriptions.map((des)=>{
                return(
                <details>
                    <p>{des}</p>
                </details>
                )
            })}
            {props.encounters.map((enc =>{
                return(
                    <EncountersTab encounter={enc}/>
                )
            }))}
            
        </details>
    )
}

export default ChaptersTab
