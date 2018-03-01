import React from 'react'
import { FormContainer, Preview, ImgPreview } from './styled components/Forms'


let map = null
let hooks = null
let additionalInfo = null


const NewChap = (props) => {
    const chap = props.chapter
    if (chap.image_base) {
        map = <ImgPreview><img src={chap.image_base} alt={chap.title} /></ImgPreview>
    } else {
        map = <Preview><p>none</p></Preview>
    }
    if (chap.instructions) {
        hooks = <div>
    
            <Preview>
                {chap.instructions.map((int) => {
                    return (
                        <div>
                            <h4>{int.title}</h4>
                            <p>{int.description}</p>
                        </div>
                    )
                })}
            </Preview></div>
    }else {
                hooks =<Preview><p>none</p></Preview>
        }
        if (chap.description) {
            additionalInfo = <Preview>
            {chap.description.map((des) => {
                return (
                    <div>
                        <p>{des}</p>
                    </div>
                )
            })}
        </Preview>
        } else {
            additionalInfo = <Preview><p>none</p></Preview>
        }
            return (
        <FormContainer>
                <h1>{chap.title}</h1>
                <h2>Introduction:</h2>
                <Preview><p>{chap.intro}</p></Preview>
                <h2>Map: </h2>

                {map}
                <h2>Instructions: </h2>
        
                {hooks}
            <h2>Descriptions: </h2>
            
            {additionalInfo}

        </FormContainer>
    )
}

export default NewChap