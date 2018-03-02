import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { FormContainer, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, FileUpload, ButtonDiv, SubmitButton, ImgPreview } from './styled components/Forms'


class EditChapter extends Component {
    state = {
        editChapter: this.props.chapter,
        descs: [],
        desc: "",
        instructions: [],
        inp: {},
        imagePreviewUrl: "",
        hasDescs: false,
        hasInst: false,
    }

    componentWillMount(){
        if(this.props.chapter.hooks){
            this.setState({hasHooks: true})
        }
        if(this.props.chapter.additional_info){
            this.setState({hasInfo: true})
        }

    }
    
    
    handleImageChange = (event) =>{
        event.preventDefault()
        const attr = event.target.name
        const val = event.target.value
        const newAdv = { ...this.state.editChapter }
        newAdv[attr] = val
        this.setState({ editChapter: newAdv, imagePreviewUrl:event.target.value })

        
    }
    handleInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const newChap = { ...this.state.editChapter }
        newChap[attr] = val
        this.setState({ editChapter: newChap })

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

    

    editChapterPatch = async () =>{
        const res = await axios.patch(`/api/adventures/${this.props.match.params.id}/chapters/${this.props.chapter.id}`, this.state.editChapter)

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
            this.setState({ editChapter: newChap})
        } else {

            return this.state.inp
        }
    }


    handleChapSubmit = async (event) => {
        event.preventDefault()
        this.editChapterPatch()

    }



    render() {
        const chapter = this.props.chapter
        let {imagePreviewUrl} = {
            file: this.state.file,
            imagePreviewUrl: this.state.imagePreviewUrl
        }
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />)
            
        }  else if (chapter.mapUrl) {
            $imagePreview = (<img src={chapter.mapUrl} />);
        } else {
            $imagePreview = (<div>Please select an Image for Preview</div>);
        }


        return (
            <FormContainer>
                <h1>Edit {chapter.title}</h1>
                <FormStyled onSubmit={this.handleChapSubmit} id="FormEd">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title:</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title" onChange={this.handleInput} value={chapter.title} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="intro">Introduction: </LabelStyle>
                            </div>
                            <TextAreaStyle name="intro" id="" cols="30" rows="10" placeholder="Text for the introduction" onChange={this.handleInput} value={chapter.intro}></TextAreaStyle >
                        </div>
                    
            
                            <div>
                            <LabelStyle htmlFor="mapUrl">Stater Map for the chapter: </LabelStyle>
                            </div>
                            <FileUpload type="text" name="mapUrl" placeholder="upload" onChange={this.handleImageChange} />
                            <ImgPreview>{$imagePreview}</ImgPreview>

                    </FormDiv>
                </FormStyled>
                <h2>Instructions</h2>
                {this.state.hasInst ?
                chapter.instructions.map((int)=>{
                    return(
                    <FormStyled>
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title of instruction:</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title of Instruction" onChange={this.handleInpInput}  value={int.title}/>
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="description">Description of the Instruction: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Text for the hook" onChange={this.handleInpInput}value={int.description}></TextAreaStyle >
                        </div>
                    </FormDiv>

                </FormStyled>
                )}) : <FormStyled>
                <FormDiv onSubmit={this.handleNewInpSubmit}>
                    <TitleDiv>
                        <LabelStyle htmlFor="title">Title of instruction:</LabelStyle>
                        <InputStyle type="text" name="title" placeholder="Title of Instruction" onChange={this.handleInpInput}  />
                    </TitleDiv>
                    <div>
                        <div>
                            <LabelStyle htmlFor="description">Description of the Instruction: </LabelStyle>
                        </div>
                        <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Text for the hook" onChange={this.handleInpInput}></TextAreaStyle >
                    </div>
                </FormDiv>
                <ButtonDiv>
                            <SubmitButton type="submit">Add Instruction</SubmitButton>
                        </ButtonDiv>
                </FormStyled>
}
                <h2>Descriptions:</h2>
                {this.state.hasDescs ?
                chapter.description.map((des)=>{
                    return(
                <FormStyled>
                    <FormDiv>
                    
                        <div>
                            <div>
                                <LabelStyle htmlFor="description">The Description: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Infomation" onChange={this.handleDescInput} value={des}></TextAreaStyle >
                        </div>
                    </FormDiv>
                </FormStyled>
                )}):<p>No Descriptions</p>}
                        <ButtonDiv>
                            <SubmitButton type="submit" id="FormEd">Edit Chapter</SubmitButton>
                        </ButtonDiv>
 
            </FormContainer>
        )

    }
}

export default EditChapter