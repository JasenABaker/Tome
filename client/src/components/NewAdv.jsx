import React from 'react'
import { FormContainer, Preview, ImgPreview } from './styled components/Forms'


let map = null
let hooks = null
let hooksIntro = null
let additionalInfo = null


const NewAdv = (props) => {
    const adv = props.adventure
    if (adv.mapUrl) {
        map = <ImgPreview><img src={adv.mapUrl} alt={adv.title} /></ImgPreview>
    } else {
        map = <Preview><p>none</p></Preview>
    }
    if (adv.hooks) {
        hooksIntro = <Preview>
        <p>{adv.hooks_intro}</p>
        </Preview>
        hooks = <Preview>
                {adv.hooks.map((hook) => {
                    return (
                        <div>
                            <h4>{hook.title}</h4>
                            <p>{hook.description}</p>
                        </div>
                    )
                })}
            </Preview>
    }else {
                hooksIntro = <Preview><p>none</p></Preview>
                hooks = <Preview><p>none</p></Preview>
        }
        if (adv.additional_info) {
            additionalInfo = <Preview>
            {adv.additional_info.map((ad) => {
                return (
                    <div>
                        <h4>{ad.title}</h4>
                        <p>{ad.description}</p>
                    </div>
                )
            })}
        </Preview>
        } else {
            additionalInfo = <Preview><p>none</p></Preview>
        }
            return (
        <FormContainer>
                <h1>{adv.title}</h1>
                <h2>Introduction:</h2>
                <Preview><p>{adv.intro}</p></Preview>
                <h2>Synopsis: </h2>
                <Preview><p>{adv.synopsis}</p></Preview>
                <h2>Running the Adventure: </h2>
                <Preview><p>{adv.running_the_adventure}</p></Preview>
                <h2>Map: </h2>

                {map}
                <h2>Hooks: </h2>
                {hooksIntro}
                {hooks}
            <h2>Additonal Info: </h2>
            
            {additionalInfo}

        </FormContainer>
    )
}

export default NewAdv