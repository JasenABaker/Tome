import React, { Component } from 'react'
import Collapse from 'react-collapse'
import { AdvInfoSection, HeadingContainer } from './styled components/Containers'
import { MainTab, Content, ContentDiv, HeaderTab, AdvTab, SubTab } from './styled components/Tabs'
import { MonsterCardContainer, SectionSelction } from './styled components/Containers'




class EncountersTab extends Component {
    state = {
        isIntroOpen: false,
        sub_locations: [],
        subLocation: {},
        isSubSet: false,
        isSubOpen: false,
        isOpenedDesc: false,
        isOpenedDang: false,
        isOpenedDev: false,
        isOpenedTres: false,
        isOpenedMon: false,
        isOpenedAdd: false

    }
    handleIntroOpen = () => {
        this.setState({ isIntroOpen: !this.state.isIntroOpen })
    }
    setSub = (sub) => {
        this.setState({ subLocation: sub, isSubSet: true })
    }
    openSub = () => {
        this.setState({ isSubOpen: !this.state.isSubOpen })
    }
    handleDescOpen = () => {
        this.setState({ isOpenedDesc: !this.state.isOpenedDesc })
    }
    handleDangOpen = () => {
        this.setState({ isOpenedDang: !this.state.isOpenedDang })
    }
    handleDevOpen = () => {
        this.setState({ isOpenedDev: !this.state.isOpenedDev })
    }
    handleTresOpen = () => {
        this.setState({ isOpenedTres: !this.state.isOpenedTres })
    }
    handleMonOpen = () => {
        this.setState({ isOpenedMon: !this.state.isOpenedMon })
    }
    handleAddOpen = () => {
        this.setState({ isOpenedAdd: !this.state.isOpenedAdd })
    }




    render() {
        const creatureArray = []
        let developments = null
        let creatures = null
        let treasures = null
        let sub = null
        let desc = null
        let danger = null
        let add = null
        {
            this.props.creatures.map((creature) => {
                if (creature.encounter_id === this.props.encounter.id) {
                    creatureArray.push(creature)
                } else {
                    return creature
                }
                // console.log(creatureArray)
            })
        }

        if (this.props.encounter.developments) {
            developments = <ContentDiv>
                <MainTab onClick={this.handleDevOpen}>
                    Developments
            </MainTab>
                <Collapse isOpened={this.state.isOpenedDev}>
                    <Content>
                        <p>{this.props.encounter.developments}</p>
                    </Content>
                </Collapse>
            </ContentDiv>
        } else {
            developments = null
        }

        if (this.props.encounter.treasures) {
            treasures =
                <ContentDiv>
                    <MainTab onClick={this.handleTresOpen}>Treasure</MainTab>
                    <Collapse isOpened={this.state.isOpenedTres}>
                        <Content>
                            <p>{this.props.encounter.treasures}</p>
                        </Content>
                    </Collapse>
                </ContentDiv>

        } else {
            treasures = null
        }

        if (creatureArray.length >= 1) {
            creatures = <ContentDiv>
                <MainTab onClick={this.handleMonOpen}>Creatures</MainTab>
                <Collapse isOpened={this.state.isOpenedMon}>
                    <MonsterCardContainer>
                        {creatureArray.map((creature) => {

                            return (
                                <div>
                                    <h3>{creature.creatures.name}</h3>
                                    <h4>Number of {creature.creatures.name}: {creature.count}</h4>
                                    <h4><span>HP: </span>{creature.creatures.hit_points}</h4>
                                    <h4><span>AC: </span>{creature.creatures.armor_class}</h4>
                                    <button onClick={() => this.props.findCreature(creature.creatures)}>Monter stats </button>
                                </div>
                            )
                        })
                        }
                    </MonsterCardContainer>
                </Collapse>
            </ContentDiv>

        } else {
            creatures = null
        }
        if (this.props.encounter.sub_locations.length > 0) {
            sub = <SectionSelction>
                <HeadingContainer>
                    {this.props.encounter.sub_locations.map((sub) => {
                        return (
                            <HeaderTab onClick={() => this.setSub(sub)}>{sub.title} ({sub.map_location})</HeaderTab>
                        )
                    })}
                </HeadingContainer>
                {this.state.isSubSet ?
                    <ContentDiv>
                        <SubTab onClick={this.openSub}>
                            {this.state.subLocation.title}
                        </SubTab>
                        <Collapse isOpened={this.state.isSubOpen}>
                            <Content>
                                <p>{this.state.subLocation.instructions}</p>
                            </Content>
                        </Collapse>
                    </ContentDiv> : <div></div>}
            </SectionSelction>
        } else {
            sub = null
        }
        if (this.props.encounter.descriptions.length > 0) {
            desc = <ContentDiv>
                <MainTab onClick={this.handleDescOpen}>
                    Descriptions
        </MainTab>
                <Collapse isOpened={this.state.isOpenedDesc}>
                    <Content>
                        {this.props.encounter.descriptions.map((des) => {
                            return (

                                <p>{des}</p>
                            )
                        })}
                    </Content>
                </Collapse>
            </ContentDiv>
        } else {
            desc = null
        }
        if (this.props.encounter.dangers.length > 0) {
            danger = <ContentDiv>
                <MainTab onClick={this.handleDangOpen}>
                    Dangers
            </MainTab>
                <Collapse isOpened={this.state.isOpenedDang}>
                    <Content>
                        {this.props.encounter.dangers.map((danger) => {
                            return (
                                <div>
                                    <h4>{danger.title}</h4>
                                    <p>{danger.description}</p>
                                </div>
                            )

                        })}
                    </Content>
                </Collapse>
            </ContentDiv>
        } else {
            danger = null
        }
        if (this.props.encounter.additional_info.length > 0) {
            add = <ContentDiv>
                <MainTab onClick={this.handleAddOpen}>
                    Additional Information
    </MainTab>
                <Collapse isOpened={this.state.isOpenedAdd}>
                    <Content>
                        {this.props.encounter.additional_info.map((info) => {
                            return (
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
                    <Collapse isOpened={this.state.isIntroOpen}>
                        <Content>
                            <p>{this.props.encounter.intro}</p>
                        </Content>
                    </Collapse>
                </ContentDiv>
                {desc}
                {danger}
                {add}
                {sub}
                {creatures}
                {treasures}
                {developments}
            </AdvInfoSection>

        )

    }
}
export default EncountersTab