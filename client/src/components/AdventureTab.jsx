import React from 'react'
import ReactDOM from 'react-dom'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';





const AdventureTab = (props) => {
    return (
        <Accordion>
            <AccordionItem>
            <AccordionItemTitle>
            <h1>{props.adventure.title}</h1>
            </AccordionItemTitle>
                    <AccordionItemBody>
                    <p>{props.adventure.intro}</p>
                </AccordionItemBody>
            </AccordionItem>
                <details>
                    <summary><h2>Adventure Synopsis</h2></summary>
                    <p>{props.adventure.synopsis}</p>
                </details>
                <details>
                    <summary><h2>Character Hooks</h2></summary>
                    <p>{props.adventure.hooks_intro}</p>

                    {props.adventure.hooks.map((hook) => {
                        return (
                            <div>
                                <details>
                                    <summary><h3>{hook.title}</h3></summary>
                                    <p>{hook.description}</p>
                                </details>
                            </div>
                        )
                    })}

                </details>
                {props.adventure.additional_info.map((info) => {
                    return (
                        <div>
                            <details>
                                <summary><h4>{info.title}</h4></summary>
                                <p>{info.description}</p>
                            </details>
                        </div>
                    )
                })}
        </Accordion>
    )

}

export default AdventureTab