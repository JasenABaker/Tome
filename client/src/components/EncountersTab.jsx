import React, {Component} from 'react'
import Collapse from 'react-collapse'
import {AdvInfoSection, HeadingContainer} from './styled components/Containers'
import {MainTab,Content,ContentDiv, HeaderTab, AdvTab} from './styled components/Tabs'
import { MonsterCardContainer } from './styled components/Containers'




class EncountersTab extends Component {
    state = {
        isIntroOpen: false,
        sub_locations: [],
        subLocation: {},
        isSubSet: false,
        isSubOpen: false
        
    }
    handleIntroOpen = () =>{
        this.setState({isIntroOpen: !this.state.isIntroOpen})
    }
    setSub = (sub)=>{
        this.setState({subLocation: sub, isSubSet: true})
    }
    openSub = () => {
        this.setState({isSubOpen: !this.state.isSubOpen})
    }


    
    render() {
        const creatureArray = []
        let developments = null
        let creatures = null
        let treasures = null
        let sub = null
    {
        this.props.creatures.find((creature) => {
            if (creature.encounter_id === this.props.encounter.id) {
                creatureArray.push(creature)
            } else {
                return creature
            }
            // console.log(creatureArray)
        })
    }

    if (this.props.encounter.developments !==""){
        developments = ()=>{ return (
            <details>
            <summary>Developments</summary>
            <p>{this.props.encounter.developements}</p>
        </details>

        )}
        developments()
    } else {
        developments = null
    }

    if(this.props.encounter.treasures){
        treasures = 
                <details>
                <summary>Treasure</summary>
                <p>{this.props.encounter.treasures}</p>
            </details>
    
    }else {
        treasures = null
    }

    if (creatureArray.length < 1) {
        creatures = null
    } else if (creatureArray.length >= 1){
        creatures =  <details>
        <summary>Creatures</summary>
        <MonsterCardContainer>
            {creatureArray.map((creature) => {

                return(
                    <div>
                        <h3>{creature.creatures.name}</h3>
                        <h4>Number of {creature.creatures.name}: {creature.count}</h4>
                        <h4><span>HP: </span>{creature.creatures.hit_points}</h4>
                        <h4><span>AC: </span>{creature.creatures.armor_class}</h4>
                        <button onClick={()=>this.props.findCreature(creature.creatures)}>Monter stats </button>
                    </div>
                )
            })
            }
        </MonsterCardContainer>
    </details>

    } else {
        creatures = null
    }
    if(this.props.encounter.sub_locations){
        sub = <ContentDiv>
            <HeadingContainer>
            {this.props.encounter.sub_locations.map((sub)=>{
                return(
                <HeaderTab onClick={()=>this.setSub(sub)}>{sub.title}</HeaderTab>
                )
            })}
            </HeadingContainer>
            {this.state.isSubSet ?
            <ContentDiv>
            <AdvTab onClick={this.openSub}>
            {this.state.subLocation.title}
            </AdvTab>
            <Collapse isOpened={this.state.isSubOpen}>
            <p>{this.state.subLocation.map_location}</p>
            <p>{this.state.subLocation.instructions}</p>

            </Collapse>
            </ContentDiv> : null }
            </ContentDiv>
    } else {
        sub = null
    }

    
    return ( 
    
        <AdvInfoSection>
                <ContentDiv>
                <MainTab onClick={this.handleIntroOpen}>
                    Introduction
                </MainTab>
                <Collapse isOpened={this.state.isIntroOpen}>
                <Content>
                <p>{this.props.encounter.intro}</p>
                </Content>
                </Collapse>
                </ContentDiv>

            { this.props.encounter.descriptions.map((des) => {
                return (
                    <details>
                        <p>{des}</p>
                    </details>
                )
            })}
            {this.props.encounter.dangers.map((danger) => {
                return (
                    <details>
                        <summary>{danger.title}</summary>
                        <p>{danger.description}</p>
                    </details>
                )

            })}
            {this.props.encounter.additional_info.map((info) => {
                return (
                    <details>
                        <summary>{info.title}</summary>
                        <p>{info.description}</p>
                    </details>
                )

            })}

        {sub}
        {treasures}
        {developments}
        {creatures}
        
        </AdvInfoSection>


)

}
}
export default EncountersTab