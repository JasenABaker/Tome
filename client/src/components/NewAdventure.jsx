import React, { Component } from 'react'
import axios from 'axios'
import { FormContainer, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, FileUpload, ButtonDiv, SubmitButton, ImgPreview } from './styled components/Forms'


class NewAdventure extends Component {
    state = {
        newAdventure: {},
        hooks: [],
        infos: [],
        hook: {},
        info: {},
        file: [],
        imagePreviewUrl: ""
    }
    handleImageChange = (event) =>{
        event.preventDefault()
        const attr = event.target.name
        const val = event.target.value
        const newAdv = { ...this.state.newAdventure }
        newAdv[attr] = val
        this.setState({ newAdventure: newAdv, imagePreviewUrl:event.target.value })

        
        


    }
    handleInput = (event) => {
        const attr = event.target.name
        const val = event.target.value
        const newAdv = { ...this.state.newAdventure }
        newAdv[attr] = val
        this.setState({ newAdventure: newAdv })

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

    handleNewHookSubmit = (event) => {
        event.preventDefault()
        if ((Object.keys(this.state.hook).length === 2) &&
            (this.state.hook.title !== "") &&
            (this.state.hook.description !== "")) {
            this.state.hooks.push(this.state.hook)
            const newAdv = { ...this.state.newAdventure }
            newAdv.hooks = this.state.hooks
            event.target.reset()
            this.setState({ newAdventure: newAdv })
        } else {

            return this.state.hook
        }
    }

    handleNewInfoSubmit = (event) => {
        event.preventDefault()
        if ((Object.keys(this.state.info).length === 2) &&
            (this.state.info.title !== "") &&
            (this.state.info.description !== "")) {

            this.state.infos.push(this.state.info)
            const newAdv = { ...this.state.newAdventure }
            newAdv.additional_info = this.state.infos
            event.target.reset()
            this.setState({ newAdventure: newAdv })
        } else {
            return this.state.info
        }
    }

    newAdventurePost = async () =>{
        const res = await axios.post('/api/adventures', this.state.newAdventure)
        const updateNewAdv = {...this.state.newAdventure}
        updateNewAdv.id = res.data.id
        console.log(res.data)
        this.props.setAdventure(updateNewAdv)
    }

    insertImage = (image) => {
        const newAdv = {...this.state.newAdventure}
        newAdv.image_base = image
        this.setState({newAdventure: newAdv})
    }

    handleAdvSubmit = async (event) => {
        event.preventDefault()
        this.newAdventurePost()

    }


    render() {
        let {imagePreviewUrl} = {
            file: this.state.file,
            imagePreviewUrl: this.state.imagePreviewUrl
        }
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="nothing" />)
            
        }  else {
            $imagePreview = (<div>Please select an Image for Preview</div>);
        }

        return (
            <FormContainer>
                <h1>New Adventure</h1>
                <FormStyled onSubmit={this.handleAdvSubmit} id="FormAd">
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
                            <div>
                                <LabelStyle htmlFor="synopsis">Adventure Synopsis: </LabelStyle>
                            </div>
                            <TextAreaStyle name="synopsis" id="" cols="30" rows="10" placeholder="Write a synopsis of the adventure." onChange={this.handleInput}></TextAreaStyle >
                        </div>
                        <div>
                            <div>
                                <LabelStyle htmlFor="running_the_adventure">How to run the Adventure: </LabelStyle>
                            </div>
                            <TextAreaStyle name="running_the_adventure" id="" cols="30" rows="10" placeholder="Notes on how to run the adventure" onChange={this.handleInput}></TextAreaStyle >
                       
                            <div>
                            <LabelStyle htmlFor="mapUrl">Stater Map for the Adventure: </LabelStyle>
                            </div>
                            <FileUpload type="text" name="mapUrl" placeholder="upload" onChange={this.handleImageChange} />
                            <ImgPreview>{$imagePreview}</ImgPreview>

                            <div>
                                <LabelStyle htmlFor="hooks_intro">For your hooks to the adventure write a short paragrah about what options the DM may have: </LabelStyle>
                            </div>
                            <TextAreaStyle name="hooks_intro" id="" cols="30" rows="10" placeholder="Short paragrah introduction your hooks" onChange={this.handleInput}></TextAreaStyle >
                        </div>

                    </FormDiv>
                </FormStyled>
                <h2>Hooks</h2>
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
                        <p>Once A hook is submitted the form will be refreshed. Add more hooks!</p>
                        <ButtonDiv>
                            <SubmitButton type="submit">Add Hook</SubmitButton>
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
                        <ButtonDiv>
                            <SubmitButton type="submit" form="FormAd">Add Adventure</SubmitButton>
                        </ButtonDiv>
            </FormContainer>
        )

    }
}

export default NewAdventure