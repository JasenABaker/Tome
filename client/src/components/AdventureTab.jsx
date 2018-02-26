import React from 'react'




const AdventureTab = (props) => {
    return (
        <details>
            <summary><h1>{props.adventure.title}</h1></summary>
            <div>
                <details>
                    <summary>Intro</summary>
                    <p>{props.adventure.intro}</p>
                </details>
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
            </div>
        </details>
    )

}

export default AdventureTab