import React, { Component } from 'react'
import { Collapse } from 'react-collapse'
import { AdvInfoSection } from './styled components/Containers'
import { MainTab, ContentDiv, Content } from './styled components/Tabs'



let hooks = null
let run = null
let add = null

class AdventureTab extends Component {
    state = {
        isOpenedIntro: false,
        isOpenedSynopsis: false,
        isOpenedRun: false,
        isOpenedHook: false,
        isOpenedAdd: false
    }

    handleIntroOpen = () => {
        this.setState({ isOpenedIntro: !this.state.isOpenedIntro })
    }
    handleSynopsisOpen = () => {
        this.setState({ isOpenedSynopsis: !this.state.isOpenedSynopsis})
    }
    handleRunOpen = () => {
        this.setState({ isOpenedRun: !this.state.isOpenedRun})
    }
    handleHookOpen = () => {
        this.setState({ isOpenedHook: !this.state.isOpenedHook})
    }
    handleAddOpen = () => {
        this.setState({ isOpenedAdd: !this.state.isOpenedAdd})
    }

    render() {
        if (this.props.adventure.hooks) {
            hooks = <ContentDiv>
                <MainTab onClick={this.handleHookOpen}>
                    Hooks
            </MainTab>
            <Collapse isOpened={this.state.isOpenedHook}>
            <Content>
            <p>{this.props.adventure.hooks_intro}</p>
            
            {this.props.adventure.hooks.map((hook) => {
                    return (
                        <div>
                            <h3>{hook.title}</h3>
                            <p>{hook.description}</p>
                        </div>
                    )

                })}
                </Content>
            </Collapse>
            </ContentDiv>
        } else {
            hooks = null
        }

        if (this.props.adventure.running_the_adventure) {
            run = <ContentDiv>
                <MainTab onClick={this.handleRunOpen}>
                    Running the Adventure
            </MainTab>
            <Collapse isOpened={this.state.isOpenedRun}>
            <Content>
            <p>{this.props.adventure.running_the_adventure}</p>

            </Content>
            </Collapse>
            </ContentDiv>
        } else {
            run = null
        }
        if (this.props.adventure.additional_info) {
            add = <ContentDiv>
                <MainTab onClick={this.handleAddOpen}>
                    Additional Information
                </MainTab>
                <Collapse isOpened={this.state.isOpenedAdd}>
            <Content>
                {this.props.adventure.additional_info.map((info)=>{
                    return(
                        <div>
                            <h3>{info.title}</h3>
                            <p>{info.description}</p>
                        </div>
                    )
                })}
                </Content>
                </Collapse>
            </ContentDiv>
        } else {
            add = null
        }


        return (
            <AdvInfoSection>
                <ContentDiv>
                    <MainTab onClick={this.handleIntroOpen}>
                        Introduction
            </MainTab>
                    <Collapse isOpened={this.state.isOpenedIntro}>
                        <Content>
                            <p>{this.props.adventure.intro}</p>
                        </Content>
                    </Collapse>
                </ContentDiv>
                <ContentDiv>
                    <MainTab onClick={this.handleSynopsisOpen}>
                        Adventure Synopsis
            </MainTab>
            <Collapse isOpened={this.state.isOpenedSynopsis}>
                <Content>
                <p>{this.props.adventure.synopsis}</p>
                </Content>
                </Collapse>
                </ContentDiv>
                {run}
                {hooks}
                {add}
            </AdvInfoSection>

        )

    }
}

export default AdventureTab