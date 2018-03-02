import React, { Component } from 'react'
import ReactDOM from 'react-dom'



let hooks = null
let run = null
let add = null

class AdventureTab extends Component {


    render() {
        if (this.props.adventure.hooks) {
            hooks = <details>
                <summary>Hooks</summary>
                <p>{this.props.adventure.hooks_intro}</p>

                {this.props.adventure.hooks.map((hook) => {
                    return (
                        <details>
                            <summary>{hook.title}</summary>
                            <p>{hook.description}</p>
                        </details>
                    )

                })}
            </details>
        } else {
            hooks = null
        }

        if(this.props.adventure.running_the_adventure){
            run = <details>
                    <summary>Running the Adventure</summary>
                    <p>{this.props.adventure.running_the_adventure}</p>

                </details>
        } else {
            run = null
        }
        if(this.props.adventure.additional_info){
            add = <details>
                    <summary>Additonal Information</summary>
                    {this.props.adventure.additional_info.map((info)=>{
                        return(
                            <details>
                                <summary>{info.title}</summary>
                                <p>{info.description}</p>
                            </details>
                        )
                    })}

                </details>
        }


        return (
            <details>
                <summary>
                    {this.props.adventure.title}
        </summary>
                <details>
                    <summary>Introduction</summary>
                    <p>{this.props.adventure.intro}</p>
                </details>
                <details>
                    <summary>
                        Adventure Synopsis
                    </summary>

                    <p>{this.props.adventure.synopsis}</p>
                </details>
                {run}
                {hooks}
                {add}
            </details>

        )

    }
}

export default AdventureTab