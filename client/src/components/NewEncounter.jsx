import React, { Component } from 'react'
import axios from 'axios'
import { FormContainer, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, FileUpload, ButtonDiv, SubmitButton, MonsterContainer } from './styled components/Forms'
import { AdvCard } from './styled components/Containers'
import CreatureList from './CreatureList'




class NewEncounter extends Component {
    
    state = {
        newEncounter: {},
        chapterTitle: "",
        chapterId: "",
        descs: [],
        desc: "",
        dangers: [],
        danger: {},
        infos: [],
        info: {},
        subs: [],
        sub: {},
        
    }
    handleChapterId = (chapterId, chapterTitle) => {
        const newEnc = { ...this.state.newEncounter }
        newEnc.chapter_id = chapterId

        this.setState({ newEncounter: newEnc, chapterTitle: chapterTitle, chapterId: chapterId })
    }
    handleInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const newEnc = { ...this.state.newEncounter }
        newEnc[attr] = val
        this.setState({ newEncounter: newEnc })

    }
    handleDescInput = (event) => {
        let desc = this.state.desc
        desc = event.target.value
        this.setState({ desc })

    }
    handleDangInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const danger = { ...this.state.danger }
        danger[attr] = val
        this.setState({ danger })

    }
    handleInfoInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const info = { ...this.state.info }
        info[attr] = val
        this.setState({ info })

    }
    handleSubInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const sub = { ...this.state.sub }
        sub[attr] = val
        this.setState({ sub })

    }
    handleNewDangerSubmit = (event) => {
        event.preventDefault()
        if ((Object.keys(this.state.danger).length === 2) &&
            (this.state.danger.title !== "") &&
            (this.state.danger.description !== "")) {

            this.state.dangers.push(this.state.danger)
            const newEnc = { ...this.state.newEncounter }
            newEnc.dangers = this.state.dangers
            event.target.reset()
            this.setState({ newEncounter: newEnc })
        } else {
            return this.state.danger
        }
    }

    handleNewInfoSubmit = (event) => {
        event.preventDefault()
        if ((Object.keys(this.state.info).length === 2) &&
            (this.state.info.title !== "") &&
            (this.state.info.description !== "")) {

            this.state.infos.push(this.state.info)
            const newEnc = { ...this.state.newEncounter }
            newEnc.additional_info = this.state.infos
            event.target.reset()
            this.setState({ newEncounter: newEnc })
        } else {
            return this.state.info
        }
    }

    handleNewDescSubmit = (event) => {
        event.preventDefault()
        if (this.state.desc !== "") {
            this.state.descs.push(this.state.desc)
            const newEnc = { ...this.state.newEncounter }
            newEnc.descriptions = this.state.descs
            event.target.reset()
            this.setState({ newEncounter: newEnc })
        } else {
            return this.state.desc
        }
    }

    handleNewSubSubmit = (event) => {
        event.preventDefault()
        if ((Object.keys(this.state.sub).length === 3) &&
            (this.state.sub.title !== "") &&
            (this.state.sub.map_location !== "") &&
            (this.state.sub.instructions !== "")) {

            this.state.subs.push(this.state.sub)
            const newEnc = { ...this.state.newEncounter }
            newEnc.sub_locations = this.state.subs
            event.target.reset()
            this.setState({ newEncounter: newEnc })
        } else {
            return this.state.sub
        }
    }
    newEncounterPost = async () => {
        const resEnc = await axios.post(`api/encounter`, this.state.newEncounter)
        const updateEnc = { ...this.state.newEncounter }
        updateEnc.id = resEnc.data.id
        this.props.pushEncounter(updateEnc)
    }
    handleEncSubmit = async (event) => {
        event.preventDefault()
        this.newEncounterPost()
        event.target.reset()
    }

    render() {

        null
        return (
            <FormContainer>
                <h1>New Encounter</h1>
                {this.props.chapters.map((chapter) => {
                    
                    return (
                        <div>
                            <AdvCard onClick={() => this.handleChapterId(chapter.id, chapter.title)}>{chapter.title}</AdvCard>
                        </div>
                    )
                })}
                <FormStyled onSubmit={this.handleEncSubmit} id="FormAd">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="location">Location: </LabelStyle>
                            <InputStyle type="text" name="location" placeholder="Location" onChange={this.handleInput} />
                        </TitleDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="chapter">chapter title: </LabelStyle>
                            <h4>{this.state.chapterTitle}</h4>
                        </TitleDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="map_location_number">Location Number: </LabelStyle>
                            <InputStyle type="number" name="map_location_number" onChange={this.handleInput} />
                        </TitleDiv>

                        <div>
                            <div>
                                <LabelStyle htmlFor="intro">Introduction: </LabelStyle>
                            </div>
                            <TextAreaStyle name="intro" id="" cols="30" rows="10" placeholder="Text for the introduction" onChange={this.handleInput}></TextAreaStyle >
                        </div>
                        <div>
                            <div>
                                <LabelStyle htmlFor="developments">devlopments: </LabelStyle>
                            </div>
                            <TextAreaStyle name="developments" id="" cols="30" rows="10" placeholder="What happens after your encounter is finished?" onChange={this.handleInput}></TextAreaStyle >
                        </div>
                        <div>
                            <div>
                                <LabelStyle htmlFor="treasure">treasure: </LabelStyle>
                            </div>
                            <TextAreaStyle name="treasure" id="" cols="30" rows="10" placeholder="Describe what treasure can be found and any checks needed to find it." onChange={this.handleInput}></TextAreaStyle >
                        </div>

                    </FormDiv>
                </FormStyled>
                <h2>Descriptions!</h2>
                <FormStyled onSubmit={this.handleNewDescSubmit} id="info">
                    <FormDiv>

                        <div>
                            <div>
                                <LabelStyle htmlFor="description">Description: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Infomation" onChange={this.handleDescInput}></TextAreaStyle >
                        </div>
                        <p>Add more descirptions after clicking add</p>
                        <ButtonDiv>
                            <SubmitButton type="submit">Add Description</SubmitButton>
                        </ButtonDiv>
                    </FormDiv>
                </FormStyled>
                <h2>Dangers</h2>
                <FormStyled onSubmit={this.handleNewDangerSubmit} id="info">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Type of Danger</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Type of Danger" onChange={this.handleDangInput} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="description">Danger information: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Infomation on the Danger" onChange={this.handleDangInput}></TextAreaStyle >
                        </div>
                        <p>Same with the information. Once submitted, you can Add more</p>
                        <ButtonDiv>
                            <SubmitButton type="submit">Add Danger</SubmitButton>
                        </ButtonDiv>
                    </FormDiv>
                </FormStyled>
                <h2>Additonal Infomation</h2>
                <FormStyled onSubmit={this.handleNewInfoSubmit} id="info">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title of Additional Infomation :</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title of Additional Infomation" onChange={this.handleInfoInput} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="description">The Infomation: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Infomation" onChange={this.handleInfoInput}></TextAreaStyle >
                        </div>
                        <p>Same with the information. Once submitted, you can Add more</p>
                        <ButtonDiv>
                            <SubmitButton type="submit">Add Info</SubmitButton>
                        </ButtonDiv>
                    </FormDiv>
                </FormStyled>
                <h2>Sub Locations</h2>
                <FormStyled onSubmit={this.handleNewSubSubmit} id="info">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Sub Location Name:</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Sub location name" onChange={this.handleSubInput} />
                        </TitleDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="map_location">Map Location Marker:</LabelStyle>
                            <InputStyle type="text" name="map_location" placeholder="Marker for location i.e.(A,B,C,D etc..)" onChange={this.handleSubInput} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="instructions">Instructions for this location: </LabelStyle>
                            </div>
                            <TextAreaStyle name="instructions" id="" cols="30" rows="10" placeholder="Instructions about the sublocation." onChange={this.handleSubInput}></TextAreaStyle >
                        </div>
                        <p>You can always add more</p>
                        <ButtonDiv>
                            <SubmitButton type="submit">Add Sub Location</SubmitButton>
                        </ButtonDiv>
                    </FormDiv>
                </FormStyled>
                
                <ButtonDiv>
                    <SubmitButton type="submit" form="FormAd">Add Encounter</SubmitButton>
                    <SubmitButton onClick={()=>this.props.setEncounter()}>Finish</SubmitButton>
                </ButtonDiv>
            </FormContainer>
        )

    }
}

export default NewEncounter