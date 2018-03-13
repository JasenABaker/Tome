import React, { Component } from 'react'
import axios from 'axios'
import { FormContainer, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, FileUpload, ButtonDiv, SubmitButton, ImgPreview } from './styled components/Forms'


class NewChapter extends Component {
    state = {
        newChapter: {},
        descs: [],
        instructions: [],
        inp: {},
        desc: "",
        file: [],
        imagePreviewUrl: ""
    }
    handleImageChange = (event) =>{
        event.preventDefault()
        const attr = event.target.name
        const val = event.target.value
        const newChap = { ...this.state.newChapter}
        newChap[attr] = val
        this.setState({ newChapter: newChap, imagePreviewUrl:event.target.value })

        
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
        this.props.pushChapter(updateChapter)

    }
    handleChapSubmit = async (event) => {
        event.preventDefault()
        this.newChapterPost()
        event.target.reset()

    }

    render() {
        let {imagePreviewUrl} = {
            file: this.state.file,
            imagePreviewUrl: this.state.imagePreviewUrl
        }
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="nothing"/>)
            
        }  else {
            $imagePreview = (<div>Please select an Image for Preview</div>);
        } 
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
                        <div>
                            <LabelStyle htmlFor="mapUrl">Map for the Chapter: </LabelStyle>
                            </div>
                            <FileUpload type="text" name="mapUrl" placeholder="upload" onChange={this.handleImageChange} />
                            <ImgPreview>{$imagePreview}</ImgPreview>

                            
                    </FormDiv>
                </FormStyled>
                <h2>Instructions</h2>
                <FormStyled onSubmit={this.handleNewInpSubmit} id="hook">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title of Instruction :</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title of Instruction" onChange={this.handleInpInput} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="description">Description of the instruction: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Description" onChange={this.handleInpInput}></TextAreaStyle >
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
                            <SubmitButton onClick={()=>this.props.setChapter()}>Finished Adding Chapters</SubmitButton>
                        </ButtonDiv>
            </FormContainer>
        )

    }
}

export default NewChapter