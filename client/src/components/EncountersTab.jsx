import React from 'react'




const EncountersTab = (props) => {
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

        </details>
    )

}

export default EncountersTab