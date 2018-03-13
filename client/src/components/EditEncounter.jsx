import React, { Component } from 'react'
import axios from 'axios'
import { FormContainerTwo, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, ButtonDiv, SubmitButton } from './styled components/Forms'


class EditEncounter extends Component {
    state = {
        editEncounter: {},
        chapter: {},
        desc: "",
        danger: {},
        info: {},
        sub: {},
        chapNotSelected: true,
        encNotSelected: true,

    }

    handleInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const editEnc = { ...this.state.editEncounter }
        editEnc[attr] = val
        this.setState({ editEncounter: editEnc })

    }
    handleDescEdit = (event, i) => {
        const editEnc = { ...this.state.editEncounter }
        const editDesc = [...editEnc.descriptions]
        editDesc[i] = event.target.value
        this.setState({editEncounter: editEnc})

    }
    
    handleDangInputEdit = (event, i) => {
        const attr = event.target.name
        const val = event.target.value
        const editEnc = { ...this.state.editEncounter }
        const danger = [...editEnc.dangers]
        danger[i][attr] = val

        this.setState({editEncounter: editEnc })

    }
    handleInfoEdit = (event, i) => {
        const attr = event.target.name
        const val = event.target.value
        const editEnc = {...this.state.editEncounter}
        const editInfo = [...editEnc.additional_info]
        editInfo[i][attr] = val
        this.setState({ editEncounter: editEnc })

    }

    handleSubEdit = (event, i) => {
        const attr = event.target.name
        const val = event.target.value
        const editEnc = {...this.state.editEncounter}
        const sub = [...editEnc.sub_locations]
        sub[i][attr] = val
        this.setState({ editEncounter: editEnc })

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
    
    handleNewInfoSubmit = (event) => {
        event.preventDefault()
        if ((Object.keys(this.state.info).length === 2) &&
            (this.state.info.title !== "") &&
            (this.state.info.description !== "")) {
            const editEnc = { ...this.state.editEncounter }
            editEnc.additional_info.push(this.state.info)
            event.target.reset()
            this.setState({ editEncounter: editEnc })
        } else {
            return this.state.info
        }
    }
    handleNewDangerSubmit = (event) => {
        event.preventDefault()
        if ((Object.keys(this.state.danger).length === 2) &&
            (this.state.danger.title !== "") &&
            (this.state.danger.description !== "")) {
            const editEnc = { ...this.state.editEncounter }
            editEnc.dangers.push(this.state.dangers)
            event.target.reset()
            this.setState({ editEncounter: editEnc })
        } else {
            return this.state.info
        }
    }
    handleNewDescSubmit = (event) => {
        event.preventDefault()
        if (this.state.desc !== "") {
            const editEnc = { ...this.state.editEncounter }
            editEnc.descriptions.push(this.state.desc)
            event.target.reset()
            this.setState({ editEncounter: editEnc })
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
            const editEnc = { ...this.state.editEncounter }
            editEnc.sub_locations.push(this.state.sub)
            event.target.reset()
            this.setState({ editEncounter: editEnc })
        } else {
            return this.state.sub
        }
    }

    

    

    editEncounterPatch = async () =>{
        const res = await axios.patch(`/api/encounter/${this.state.editEncounter.id}`, this.state.editEncounter)

        this.props.updateEncounter(res.data)

    }

    handleAdvSubmit = async (event) => {
        event.preventDefault()
        console.log(`Patching ${this.state.editEncounter.location}`)
        this.editEncounterPatch()

    }
    handleChapSelect = (chap)=> {
        this.setState({chapter: chap, chapNotSelected: false}) 
    }

    handleEncSelect = (enc) => {
    
        this.setState({editEncounter: enc, encNotSelected: false})
    }


    render() {
        let desc = null
        let info = null
        let danger = null
        let sub = null
        
        if(this.state.editEncounter.descriptions){
            desc = this.state.editEncounter.descriptions.map((desc, index)=>{
                return(
                    <FormStyled>
                    <FormDiv>

                        <div>
                            <div>
                                <LabelStyle htmlFor="description">Description: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Infomation" onChange={(event)=>this.handleDescEdit(event, index)}></TextAreaStyle >
                        </div>
                    </FormDiv>
                </FormStyled>
                )}) 
            } else {
                desc = null
            }
        if(this.state.editEncounter.dangers){
            danger = this.state.editEncounter.dangers.map((danger, index)=>{
                <FormStyled>
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Type of Danger</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Type of Danger" onChange={(event)=>this.handleDangInputEdit(event,index)} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="description">Danger information: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Infomation on the Danger" onChange={(event)=>this.handleDangInputEdit(event,index)}></TextAreaStyle >
                        </div>
                    </FormDiv>
                </FormStyled>
            })
        } else {
            danger = null
        }
        if(this.state.editEncounter.additional_info){
                info = this.state.editEncounter.sub_locations.map((info, index)=>{
                    return(
                <FormStyled onSubmit={this.handleNewInfoSubmit} id="info">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title of Additional Infomation :</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title of Additional Infomation" onChange={(event)=>this.handleInfoEdit(event,index)}  value={info.title}/>
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="description">The Infomation: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Infomation" onChange={(event)=>this.handleInfoEdit(event,index)} value={info.description}></TextAreaStyle >
                        </div>
                    </FormDiv>
                </FormStyled>)})
                }else {
                    info = null
                }
        if(this.state.editEncounter.sub_locations){
            sub = this.state.editEncounter.sub_locations.map((sub, index)=>{
                return(
                    <FormStyled>
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Sub Location Name:</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Sub location name" onChange={(event)=>this.handleSubEdit(event,index)} value={sub.title} />
                        </TitleDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="map_location">Map Location Marker:</LabelStyle>
                            <InputStyle type="text" name="map_location" placeholder="Marker for location i.e.(A,B,C,D etc..)" onChange={(event)=>this.handleSubEdit(event,index)} value={sub.map_location} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="instructions">Instructions for this location: </LabelStyle>
                            </div>
                            <TextAreaStyle name="instructions" id="" cols="30" rows="10" placeholder="Instructions about the sublocation." onChange={(event)=>this.handleSubEdit(event,index)} value={sub.instructions}></TextAreaStyle >
                        </div>
                    </FormDiv>
                </FormStyled>

                )
            })
        } else {
            sub = null
        }

        let displayBlock = <div></div>

        if(!this.state.chapNotSelected){
            const filteredEncounters = this.props.encounters.filter((encounter)=>{
                return encounter.chapter_id = this.state.chapter.id
            })
            if(filteredEncounters){
            displayBlock = filteredEncounters.map((encounter) => {
                return <SubmitButton onClick={()=>this.handleEncSelect(encounter)}>{encounter.location}</SubmitButton>
            })
            }  else {
                displayBlock = null
                this.setState({encNotSelected: true})
            }
        }

        return (
            <FormContainerTwo>
            <div>
                {this.props.chapters.map((chap)=>{
                    return(
                        <SubmitButton onClick={()=>this.handleChapSelect(chap)}>{chap.title}</SubmitButton>
                    )
                })}
                {displayBlock}
            </div>
                { this.state.encNotSelected ? 
                <div></div> :
                <div>
                <h1>Edit {this.state.editEncounter.location}</h1>
                <FormStyled onSubmit={this.handleAdvSubmit} id={this.state.editEncounter.id}>
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="location">Location:</LabelStyle>
                            <InputStyle type="text" name="location" placeholder="Title" onChange={this.handleInput} value={this.state.editEncounter.location} />
                        </TitleDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="map_location_number">Location Number: </LabelStyle>
                            <InputStyle type="number" name="map_location_number" onChange={this.handleInput} value={this.state.editEncounter.map_location_number}/>
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="intro">Introduction: </LabelStyle>
                            </div>
                            <TextAreaStyle name="intro" id="" cols="30" rows="10" placeholder="Text for the introduction" onChange={this.handleInput} value={this.state.editEncounter.intro}></TextAreaStyle >
                        </div>
                        <div>
                            <div>
                                <LabelStyle htmlFor="developments">devlopments: </LabelStyle>
                            </div>
                            <TextAreaStyle name="developments" id="" cols="30" rows="10" placeholder="What happens after your encounter is finished?" onChange={this.handleInput} value={this.state.editEncounter.developments}></TextAreaStyle >
                        </div>
                        <div>
                            <div>
                                <LabelStyle htmlFor="treasure">treasure: </LabelStyle>
                            </div>
                            <TextAreaStyle name="treasure" id="" cols="30" rows="10" placeholder="Describe what treasure can be found and any checks needed to find it." onChange={this.handleInput} value={this.state.editEncounter.treasure}></TextAreaStyle >
                        </div>
                    </FormDiv>
                </FormStyled>
                <h2>Descriptions: </h2>
                {desc}
                <FormStyled onSubmit={this.handleNewDescSubmit} id="info">
                    <FormDiv>

                        <div>
                            <div>
                                <LabelStyle htmlFor="description">Description: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Infomation" onChange={this.handleDescInput}></TextAreaStyle >
                        </div>
                        <ButtonDiv>
                            <SubmitButton type="submit">Add Description</SubmitButton>
                        </ButtonDiv>
                    </FormDiv>
                </FormStyled>
                <h2>Dangers</h2>
                {danger}
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
                        <ButtonDiv>
                            <SubmitButton type="submit">Add Danger</SubmitButton>
                        </ButtonDiv>
                    </FormDiv>
                </FormStyled>

            <h2>Additonal Infomation</h2>
                {info}
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
                    
                        <ButtonDiv>
                            <SubmitButton type="submit">Add Info</SubmitButton>
                        </ButtonDiv>
                    </FormDiv>
                </FormStyled>
                <h2>Sub Locations</h2>
                {sub}
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
                            <SubmitButton type="submit" form={this.state.editEncounter.id}>Add encounter</SubmitButton>
                        </ButtonDiv>
                        </div>
            }
            </FormContainerTwo>
    
        )

    }
}

export default EditEncounter