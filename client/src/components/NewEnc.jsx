import React from 'react'
import { FormContainer, Preview, ImgPreview } from './styled components/Forms'


let hooks = null
let additionalInfo = null
let sub = null

const NewEnc = (props) => {
    const enc = props.encounters
    
    if (enc.descriptions) {
        hooks = 
            <Preview>
                {enc.descriptions.map((des) => {
                    return (
                        <div>
                            <p>{des}</p>
                        </div>
                    )
                })}
            </Preview>
    }else {
                hooks = <Preview><p>none</p></Preview>
        }
        if (enc.dangers) {
            additionalInfo = <Preview>
            {enc.dangers.map((danger) => {
                return (
                    <div>
                        <h4>{danger.title}</h4>
                        <p>{danger.description}</p>
                    </div>
                )
            })}
        </Preview>
        } else {
            additionalInfo = <Preview><p>none</p></Preview>
        }
        if (enc.sub_locations) {
            sub = <Preview>
            {enc.sub_locations.map((sub) => {
                return (
                    <div>
                        <h4>{sub.title}</h4>
                        <h4>{sub.map_location}</h4>
                        <p>{sub.instructions}</p>
                    </div>
                )
            })}
        </Preview>
        } else {
            sub = <Preview><p>none</p></Preview>
        }
            return (
        <FormContainer>
                <h1>{enc.location}</h1>
                <h2>Location Number: {enc.map_location_number}</h2>
                <h2>Introduction:</h2>
                <Preview><p>{enc.intro}</p></Preview>
                <h2>Developments: </h2>
                <Preview><p>{enc.developments}</p></Preview>
                <h2>Treasure: </h2>
                <Preview><p>{enc.treasure}</p></Preview>
        
                <h2>Descriptions: </h2>
        
                {hooks}
            <h2>Dangers: </h2>
            
            {additionalInfo}

            <h2>Sub Locations: </h2>
            {sub}

        </FormContainer>
    )
}

export default NewEnc