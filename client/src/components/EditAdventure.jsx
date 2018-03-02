import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { FormContainer, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, FileUpload, ButtonDiv, SubmitButton, ImgPreview } from './styled components/Forms'


class EditAventure extends Component {
    state = {
        editAdventure: this.props.adventure,
        hooks: this.props.adventure.hooks,
        infos: this.props.adventure.additional_info,
        hook: {},
        info: {},
        file: [],
        imagePreviewUrl: "",

        hasInfo: false,
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
        const editAdv = { ...this.state.editAdventure }
        editAdv[attr] = val
        this.setState({ editAdventure: editAdv })

    }
    handleHookInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const hook = { ...this.state.hook }
        hook[attr] = val
        this.setState({ hook })

    }
    handleHookEdit = (event, i) => {
        const attr = event.target.name
        const val = event.target.value
        const editAdv = {...this.state.editAdventure}
        const editHook = [...editAdv.hooks]
        editHook[i][attr] = val
        this.setState({ editAdventure: editAdv })

    }
    handleInfoEdit = (event, i) => {
        const attr = event.target.name
        const val = event.target.value
        const editAdv = {...this.state.editAdventure}
        const editInfo = [...editAdv.additional_info]
        editInfo[i][attr] = val
        this.setState({ editAdventure: editAdv })

    }
    handleInfoInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const info = { ...this.state.info }
        info[attr] = val
        this.setState({ info })

    }
    
    handleNewInfoSubmit = (event) => {
        event.preventDefault()
        if ((Object.keys(this.state.info).length === 2) &&
            (this.state.info.title !== "") &&
            (this.state.info.description !== "")) {
            const editAdv = { ...this.state.editAdventure }
            editAdv.additional_info.push(this.state.info)
            event.target.reset()
            this.setState({ ditAdventure: editAdv })
        } else {
            return this.state.info
        }
    }
    handleNewHookSubmit = (event) => {
        event.preventDefault()
        if ((Object.keys(this.state.hook).length === 2) &&
            (this.state.hook.title !== "") &&
            (this.state.hook.description !== "")) {
            const editAdv = { ...this.state.editAdventure }
            editAdv.hooks.push(this.state.hook)
            event.target.reset()
            this.setState({ editAdventure: editAdv})
        } else {

            return this.state.hook
        }
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
        let hooks = null
        let info = null
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
        if(this.props.adventure.hooks){
            hooks = adventure.hooks.map((hook, index)=>{
                return(
                <FormStyled>
                <FormDiv>
                    <TitleDiv>
                        <LabelStyle htmlFor="title">Title of hook :</LabelStyle>
                        <InputStyle type="text" name="title" placeholder="Title of Hook" onChange={(event)=>this.handleHookEdit(event,index)}  value={hook.title}/>
                    </TitleDiv>
                    <div>
                        <div>
                            <LabelStyle htmlFor="description">Description of the hook: </LabelStyle>
                        </div>
                        <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Text for the hook" onChange={(event)=>this.handleHookEdit(event,index)}value={hook.description}></TextAreaStyle >
                    </div>
                </FormDiv>

            </FormStyled>
                )}) 
            } else {
                hooks = null
            }
            if(this.props.adventure.additional_info){
                info = adventure.additional_info.map((info, index)=>{
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


        return (
            <FormContainer>
                <h1>Edit {adventure.title}</h1>
                <FormStyled onSubmit={this.handleAdvSubmit} id="FormAd">
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title:</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title" onChange={this.handleInput} value={this.state.editAdventure.title} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="intro">Introduction: </LabelStyle>
                            </div>
                            <TextAreaStyle name="intro" id="" cols="30" rows="10" placeholder="Text for the introduction" onChange={this.handleInput} value={this.state.editAdventure.intro}></TextAreaStyle >
                        </div>
                        <div>
                            <div>
                                <LabelStyle htmlFor="synopsis">Adventure Synopsis: </LabelStyle>
                            </div>
                            <TextAreaStyle name="synopsis" id="" cols="30" rows="10" placeholder="Write a synopsis of the adventure." onChange={this.handleInput}value={this.state.editAdventure.synopsis}></TextAreaStyle >
                        </div>
                        <div>
                            <div>
                                <LabelStyle htmlFor="running_the_adventure">How to run the Adventure: </LabelStyle>
                            </div>
                            <TextAreaStyle name="running_the_adventure" id="" cols="30" rows="10" placeholder="Notes on how to run the adventure" onChange={this.handleInput}value={this.state.editAdventure.running_the_adventure}></TextAreaStyle >
                            <div>
                            <LabelStyle htmlFor="mapUrl">Stater Map for the Adventure: </LabelStyle>
                            </div>
                            <FileUpload type="text" name="mapUrl" placeholder="upload" onChange={this.handleImageChange} />
                            <ImgPreview>{$imagePreview}</ImgPreview>

                            <div>
                                <LabelStyle htmlFor="hooks_intro">For your hooks to the adventure write a short paragrah about what options the DM may have: </LabelStyle>
                            </div>
                            <TextAreaStyle name="hooks_intro" id="" cols="30" rows="10" placeholder="Short paragrah introduction your hooks" onChange={this.handleInput} value={this.state.editAdventure.hooks_intro}></TextAreaStyle >
                        </div>

                    </FormDiv>
                </FormStyled>
                <h2>Hooks</h2>
                {hooks}
                
                <FormStyled onSubmit={this.handleNewHookSubmit} id="hook">
                <FormDiv>
                    <TitleDiv>
                        <LabelStyle htmlFor="title">Title of hook :</LabelStyle>
                        <InputStyle type="text" name="title" placeholder="Title of Hook" onChange={this.handleHookInput} />
                    </TitleDiv>
                    <div>
                        <div>
                            <LabelStyle htmlFor="description">Description of the hook: </LabelStyle>
                        </div>
                        <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Text for the hook" onChange={this.handleHookInput}></TextAreaStyle >
                    </div>
                    <ButtonDiv>
                        <SubmitButton type="submit">Add Hook</SubmitButton>
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
                        <ButtonDiv>
                            <SubmitButton type="submit" form="FormAd">Add Adventure</SubmitButton>
                        </ButtonDiv>
 
            </FormContainer>
        )

    }
}

export default EditAventure