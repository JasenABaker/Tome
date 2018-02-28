import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { FormContainer, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, FileUpload, ButtonDiv, SubmitButton } from './styled components/Forms'


class NewAdventure extends Component {
    state = {
        newChapter: {},
        descs: [],
        instructions: [],
        inp: {},
        desc: "",
    }

    handleInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const newChap = { ...this.state.newChapter }
        newChap[attr] = val
        this.setState({ newChapter: newChap })

    }
    handleInpInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const inp = { ...this.state.inp}
        inp[attr] = val
        this.setState({ inp })

    }
    handleDescInput = (event) => {
        let desc = this.state.desc 
        desc = event.target.value
        this.setState({ desc })

    }

    handleNewInpSubmit = (event) => {
        event.preventDefault()
        if ((Object.keys(this.state.inp).length === 2) &&
            (this.state.inp.title !== "") &&
            (this.state.inp.description !== "")) {
            this.state.instructions.push(this.state.inp)
            const newChap = { ...this.state.newChapter }
            newChap.instructions = this.state.instructions
            event.target.reset()
            this.setState({ newChapter: newChap})
        } else {

            return this.state.inp
        }
    }

    handleNewDescSubmit = (event) => {
        event.preventDefault()
        if (this.state.desc !== "") {
            this.state.descs.push(this.state.desc)
            const newChap = { ...this.state.newChapter }
            newChap.descriptions = this.state.descs
            event.target.reset()
            this.setState({ newChapter: newChap})
        } else {
            return this.state.desc
        }
    }
    newChapterPost = async () =>{
        const resChap = await axios.post(`api/adventures/${this.props.advenId}/chapters`, this.state.newChapter)
        const updateChapter = {...this.state.newChapter}
        updateChapter.id = resChap.data.id
        console.log(updateChapter.id)
        this.props.pushChapter(updateChapter)

    }
    handleChapSubmit = async (event) => {
        event.preventDefault()
        this.newChapterPost()
        event.target.reset()

    }

    render() {
        return (
        
            <FormContainer>
                <h1>New Chapter</h1>
                <FormStyled onSubmit={this.handleChapSubmit} id="FormAd">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title:</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title" onChange={this.handleInput} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="intro">Introduction: </LabelStyle>
                            </div>
                            <TextAreaStyle name="intro" id="" cols="30" rows="10" placeholder="Text for the introduction" onChange={this.handleInput}></TextAreaStyle >
                        </div>
                        <TitleDiv>
                            <LabelStyle htmlFor="map">Map for this Chapter: </LabelStyle>
                            <FileUpload type="file" name="map" placeholder="upload" onChange={this.handleInput} />
                        </TitleDiv>
                    </FormDiv>
                </FormStyled>
                <h2>Instructions</h2>
                <FormStyled onSubmit={this.handleNewInpSubmit} id="hook">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title of instruction :</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title of Hook" onChange={this.handleInpInput} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="description">Description of the instruction: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Text for the hook" onChange={this.handleInpInput}></TextAreaStyle >
                        </div>
                        <p>Once an instruction is submitted the form will be refreshed. Add more instructions!</p>
                        <ButtonDiv>
                            <SubmitButton type="submit">Add Instruction</SubmitButton>
                        </ButtonDiv>

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
                        <ButtonDiv>
                            <SubmitButton type="submit" form="FormAd">Add Chapter</SubmitButton>
                            <SubmitButton onClick={()=>this.props.setChapter()}>Finished</SubmitButton>
                        </ButtonDiv>
            </FormContainer>
        )

    }
}

export default NewAdventure