import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { FormContainerTwo, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, FileUpload, ButtonDiv, SubmitButton, MonsterContainer } from './styled components/Forms'
import { AdvCard } from './styled components/Containers'
import CreatureList from './CreatureList'



class NewMonsterForm extends Component {
    state = {
        encounterId: 0,
        enounterLocation: "",
        search: "",
        result: [],
        resultCreature: {},
        count: 0,
        encounter_creature: {},
        isCreatureFound: false,
        falseMessage: ""
    }

    handleEncounterId = (encounId, encounterLocation) => {
        const encounterCreature = { ...this.state.encounter_creature }
        encounterCreature.encounter_id = encounId
        this.setState({ encounter_creature: encounterCreature, encounterLocation: encounterLocation, encounterId: encounId })
    }
    handleCountChange = (event) => {
        let count = this.state.count
        count = event.target.value
        this.setState({ count })
    }
    handleSearchInput = (event) => {
        let search = this.state.search
        search = event.target.value
        this.setState({ search })
    }
    handleSearchSubmit = async (event) => {
        event.preventDefault()
        const search = this.state.search
        const newSearc = search.replace(/\b[a-z]/g, (f) => { return f.toUpperCase(); })
        const some = newSearc.split(" ").join("+")
        const resSearch = await axios.get(`http://www.dnd5eapi.co/api/monsters/?name=${some}`)
        if ((resSearch.data.count !== 0)) {
            const resCrea = await axios.get(`${resSearch.data.results[0].url}`)

            this.setState({ resultCreature: resCrea.data, isCreatureFound: true })


        } else {
            const creature = "Can't find creatute. Be more specific, i.e. adult blue dragon instead of adult dragon."
            this.setState({ isCreatureFound: false, falseMessage: creature })
        }

    }
    monsterSubmit = () => {
        if ((this.state.isCreatureFound) && (this.state.count >= 1)) {
            const encounterCreature = { ...this.state.encounter_creature }
            encounterCreature.count = this.state.count
            encounterCreature.creatures = this.state.resultCreature
            this.setState({ encounter_creature: encounterCreature })
        } else {
            return null
        }
    }

    newMonsterPost = async () => {
        const payload = {
            count: this.state.count,
            creatures: this.state.resultCreature,
            encounter_id: this.state.encounterId
        }
        const resNew = await axios.post(`/api/encounter_creatures`, payload)
    }

    submit = (event) => {
        event.preventDefault()
        this.monsterSubmit()
        this.newMonsterPost()
        event.target.reset()
    }

    render() {
        return (
            <FormContainerTwo>
                <h2>Creatures!</h2>
                {this.props.encounters.map((encounter) => {
                    return (
                        <div>
                            <AdvCard onClick={() => this.handleEncounterId(encounter.id, encounter.location)}>{encounter.location}</AdvCard>
                        </div>
                    )
                })}
                <FormStyled onSubmit={this.handleSearchSubmit} id="info">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="srch">Search Monsters</LabelStyle>
                            <InputStyle ref="srch" type="search" placeholder="Search..." onChange={this.handleSearchInput} />
                        </TitleDiv>
                        <ButtonDiv>
                            <SubmitButton type="submit">Search</SubmitButton>
                        </ButtonDiv>

                    </FormDiv>
                </FormStyled>
                <FormStyled onSubmit={this.submit}>
                    <FormDiv>
                        <h3>Add to Encouter {this.state.encounterLocation}</h3>
                        <MonsterContainer>
                            {this.state.isCreatureFound ?
                                <CreatureList creature={this.state.resultCreature} /> : <p>{this.state.falseMessage}</p>}
                        </MonsterContainer>
                        <TitleDiv>
                            <LabelStyle htmlFor="count">Number of Monsters</LabelStyle>
                            <InputStyle name="count" type="number" placeholder="0" onChange={this.handleCountChange} />
                        </TitleDiv>

                        <ButtonDiv>
                            <SubmitButton type="submit">Add Monster</SubmitButton>
                        </ButtonDiv>
                    </FormDiv>
                </FormStyled>
            </FormContainerTwo>
        )
    }
}

export default NewMonsterForm