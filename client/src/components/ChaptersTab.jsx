import React, { Component } from 'react'
import { Collapse } from 'react-collapse'
import { AdvInfoSection } from './styled components/Containers'
import { MainTab, ContentDiv, Content, } from './styled components/Tabs'
import {AdvTab} from './styled components/Tabs'

class ChaptersTab extends Component {
    state = {
        isOpenedIntro: false,
        isOpenedInst: false,
        isOpenedDesc: false,
        
    }
    handleIntroOpen = () => {
        this.setState({isOpenedIntro: !this.state.isOpenedIntro})
    }
    handleInstOpen =() =>{
        this.setState({isOpenedInst: !this.state.isOpenedInst})
    }
    handleDescOpen = () =>{
        this.setState({isOpenedDesc: !this.state.isOpenedDesc})
    }

    render() {
        const chapter = this.props.chapter
        let inst = null
        let desc = null
        if (chapter.instructions.length > 0) {
            inst = <ContentDiv>
                <MainTab onClick={this.handleInstOpen}>
                Instructions
                </MainTab>
                <Collapse isOpened={this.state.isOpenedInst}>
                <Content>
                {chapter.instructions.map((inst) => {
                    return (
                        <div>
                            <h3>{inst.title}</h3>
                            <p>{inst.description}</p>
                        </div>
                    )
                })}
                </Content>
                </Collapse>
                </ContentDiv>
        }else {
            inst = null
        }
        if(chapter.descriptions) {
            desc = <ContentDiv>
                    <MainTab onClick={this.handleDescOpen}>
                    Descriptions
                    </MainTab>
                    <Collapse isOpened={this.state.isOpenedDesc}>
                    <Content>
                    {chapter.descriptions.map((des)=>{
                        return(
                            <div>
                            <p>{des}</p>
                            </div>
                        )
                    })}
                    </Content>
                    </Collapse>
                    </ContentDiv>
        } else {
            desc = null
        }


        return (
            <AdvInfoSection>
                
                    <ContentDiv>
                    <MainTab onClick={this.handleIntroOpen}>
                        Introduction
                    </MainTab>
                    <Collapse isOpened={this.state.isOpenedIntro}>
                    <Content>
                    <p>{chapter.intro}</p>
                    </Content>
                    </Collapse>
                </ContentDiv>
                {inst}
                {desc}
            </AdvInfoSection>

        )
    }
}
export default ChaptersTab
