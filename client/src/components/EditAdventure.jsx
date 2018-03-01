import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { FormContainer, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, FileUpload, ButtonDiv, SubmitButton, ImgPreview } from './styled components/Forms'


class EditAventure extends Component {
    state = {
        editAdventure: this.props.adventure,
        hooks: [],
        infos: [],
        hook: {},
        info: {},
        file: [],
        imagePreviewUrl: "",
        hasHooks: false,
        hasInfo: false,
    }

    componentWillMount(){
        if(this.props.adventure.hooks){
            this.setState({hasHooks: true})
        }
        if(this.props.adventure.additional_info){
            this.setState({hasInfo: true})
        }

    }
    
    
    handleImageChange = (event) =>{
        event.preventDefault()
        const attr = event.target.name
        const val = event.target.value
        const newAdv = { ...this.state.editAdventure }
        newAdv[attr] = val
        this.setState({ editAdventure: newAdv, imagePreviewUrl:event.target.value })

        
    }
    handleInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const newAdv = { ...this.state.editAdventure }
        newAdv[attr] = val
        this.setState({ editAdventure: newAdv })

    }
    handleHookInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const hook = { ...this.state.hook }
        hook[attr] = val
        this.setState({ hook })

    }
    handleInfoInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const info = { ...this.state.info }
        info[attr] = val
        this.setState({ info })

    }

    

    editAdventurePatch = async () =>{
        const res = await axios.patch(`/api/adventures/${this.props.match.params.id}`, this.state.editAdventure)

    }

    insertImage = (image) => {
        const newAdv = {...this.state.editAdventure}
        newAdv.image_base = image
        this.setState({editAdventure: newAdv})
    }

    handleAdvSubmit = async (event) => {
        event.preventDefault()
        this.editAdventurePatch()

    }



    render() {
        const adventure = this.props.adventure
        let {imagePreviewUrl} = {
            file: this.state.file,
            imagePreviewUrl: this.state.imagePreviewUrl
        }
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />)
            
        }  else if (adventure.mapUrl) {
            $imagePreview = (<img src={adventure.mapUrl} />);
        } else {
            $imagePreview = (<div>Please select an Image for Preview</div>);
        }


        return (
            <FormContainer>
                <h1>Edit {adventure.title}</h1>
                <FormStyled onSubmit={this.handleAdvSubmit} id="FormAd">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title:</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title" onChange={this.handleInput} value={adventure.title} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="intro">Introduction: </LabelStyle>
                            </div>
                            <TextAreaStyle name="intro" id="" cols="30" rows="10" placeholder="Text for the introduction" onChange={this.handleInput} value={adventure.intro}></TextAreaStyle >
                        </div>
                        <div>
                            <div>
                                <LabelStyle htmlFor="synopsis">Adventure Synopsis: </LabelStyle>
                            </div>
                            <TextAreaStyle name="synopsis" id="" cols="30" rows="10" placeholder="Write a synopsis of the adventure." onChange={this.handleInput}value={adventure.synopsis}></TextAreaStyle >
                        </div>
                        <div>
                            <div>
                                <LabelStyle htmlFor="running_the_adventure">How to run the Adventure: </LabelStyle>
                            </div>
                            <TextAreaStyle name="running_the_adventure" id="" cols="30" rows="10" placeholder="Notes on how to run the adventure" onChange={this.handleInput}value={adventure.running_the_adventure}></TextAreaStyle >
                            <div>
                            <LabelStyle htmlFor="mapUrl">Stater Map for the Adventure: </LabelStyle>
                            </div>
                            <FileUpload type="text" name="mapUrl" placeholder="upload" onChange={this.handleImageChange} />
                            <ImgPreview>{$imagePreview}</ImgPreview>

                            <div>
                                <LabelStyle htmlFor="hooks_intro">For your hooks to the adventure write a short paragrah about what options the DM may have: </LabelStyle>
                            </div>
                            <TextAreaStyle name="hooks_intro" id="" cols="30" rows="10" placeholder="Short paragrah introduction your hooks" onChange={this.handleInput} value={adventure.hooks_intro}></TextAreaStyle >
                        </div>

                    </FormDiv>
                </FormStyled>
                <h2>Hooks</h2>
                {this.state.hasHooks ?
                adventure.hooks.map((hook)=>{
                    return(
                    <FormStyled onSubmit={this.handleNewHookSubmit} id="hook">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title of hook :</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title of Hook" onChange={this.handleHookInput}  value={hook.title}/>
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="description">Description of the hook: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Text for the hook" onChange={this.handleHookInput}value={hook.description}></TextAreaStyle >
                        </div>
                    </FormDiv>

                </FormStyled>
                )}) : <p>No Hooks</p> }
                <h2>Additonal Infomation</h2>
                {this.state.hasInfo ?
                adventure.additional_info.map((info)=>{
                    return(
                <FormStyled onSubmit={this.handleNewInfoSubmit} id="info">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title of Additional Infomation :</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title of Additional Infomation" onChange={this.handleInfoInput}  value={info.title}/>
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="description">The Infomation: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Infomation" onChange={this.handleInfoInput} value={info.description}></TextAreaStyle >
                        </div>
                    </FormDiv>
                </FormStyled>
                )}):<p>No additional info</p>}
                        <ButtonDiv>
                            <SubmitButton type="submit" form="FormAd">Add Adventure</SubmitButton>
                        </ButtonDiv>
 
            </FormContainer>
        )

    }
}

export default EditAventure