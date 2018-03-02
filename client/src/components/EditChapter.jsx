import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { FormContainerTwo, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, FileUpload, ButtonDiv, SubmitButton, ImgPreview } from './styled components/Forms'


class EditChapter extends Component {
    state = {
        editChapter: this.props.chapter,
        descs: [],
        desc: "",
        instructions: [],
        inp: {},
        imagePreviewUrl: "",
    }



    handleImageChange = (event) => {
        event.preventDefault()
        const attr = event.target.name
        const val = event.target.value
        const newAdv = { ...this.state.editChapter }
        newAdv[attr] = val
        this.setState({ editChapter: newAdv, imagePreviewUrl: event.target.value })


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
        const inp = { ...this.state.inp }
        inp[attr] = val
        this.setState({ inp })

    }
    handleDescInput = (event) => {
        let desc = this.state.desc
        desc = event.target.value
        this.setState({ desc })

    }



    editChapterPatch = async () => {
        const res = await axios.patch(`/api/adventures/${this.props.match.params.id}/chapters/${this.props.index}`, this.state.editChapter)
        // console.log(this.state.editChapter.title)
        this.setState({editChapter: res.data})

    }

    handleNewInpSubmit = (event) => {
        event.preventDefault()
        if ((Object.keys(this.state.inp).length === 2) &&
            (this.state.inp.title !== "") &&
            (this.state.inp.description !== "")) {
            const editChap = { ...this.state.editChapter }
            editChap.instructions.push(this.state.inp)
            event.target.reset()
            this.setState({ editChapter: editChap })
        } else {

            return this.state.inp
        }
    }
    handleNewDescSubmit = (event) => {
        event.preventDefault()
        if (this.state.desc !== "") {
            const editChap = { ...this.state.editChapter }
            editChap.descriptions.push(this.state.desc)
            event.target.reset()
            this.setState({ editChapter: editChap })
        } else {
            return this.state.desc
        }
    }
    handleDescEdit = (event, i) => {
        const editChap = { ...this.state.chapters }
        const editDesc = [...editChap.descriptions]
        editDesc[i] = event.target.value
    }

    handleInpEdit = (event, i) => {
        const attr = event.target.name
        const val = event.target.value
        const editChap = { ...this.state.chapters }
        const editIns = [...editChap.instructions]
        editIns[i][attr] = val
        this.setState({ editChapter: editChap })

    }


    handleChapSubmit = async (event) => {
        event.preventDefault()
        this.editChapterPatch()

    }



    render() {
        let desc = null
        let int = null
        const chapter = this.props.chapter
        let { imagePreviewUrl } = {
            file: this.state.file,
            imagePreviewUrl: this.state.imagePreviewUrl
        }
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />)

        } else if (this.state.editChapter.mapUrl) {
            $imagePreview = (<img src={this.state.editChapter.mapUrl} />);
        } else {
            $imagePreview = (<div>Please select an Image for Preview</div>);
        }
        if (this.state.editChapter.descriptions) {
            desc = this.state.editChapter.descriptions.map((des, index) => {
                return (
                    <FormStyled>
                        <FormDiv>

                            <div>
                                <div>
                                    <LabelStyle htmlFor="description">The Description: </LabelStyle>
                                </div>
                                <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Infomation" onChange={(event) => this.handleDescEdit(event, index)} value={des}></TextAreaStyle >
                            </div>
                        </FormDiv>
                    </FormStyled>
                )
            })
        } else {
            desc = null
        }
        if (this.state.editChapter.instructions) {
            int = this.state.editChapter.instructions.map((int, index) => {
                return (
                    <FormStyled>
                        <FormDiv>
                            <TitleDiv>
                                <LabelStyle htmlFor="title">Title of instruction:</LabelStyle>
                                <InputStyle type="text" name="title" placeholder="Title of Instruction" onChange={(event) => this.handleInpEdit(event, index)} value={int.title} />
                            </TitleDiv>
                            <div>
                                <div>
                                    <LabelStyle htmlFor="description">Description of the Instruction: </LabelStyle>
                                </div>
                                <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Text for the hook" onChange={(event) => this.handleInpEdit(event, index)} value={int.description}></TextAreaStyle >
                            </div>
                        </FormDiv>

                    </FormStyled>
                )
            })
        } else {
            int = null
        }

        console.log(this.props.index)
        return (
            <FormContainerTwo>
                <h1>Edit {chapter.title}</h1>
                <FormStyled onSubmit={this.handleChapSubmit} id={this.props.index}>
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title:</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title" onChange={this.handleInput} value={this.state.editChapter.title} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="intro">Introduction: </LabelStyle>
                            </div>
                            <TextAreaStyle name="intro" id="" cols="30" rows="10" placeholder="Text for the introduction" onChange={this.handleInput} value={this.state.editChapter.intro}></TextAreaStyle >
                        </div>


                        <div>
                            <LabelStyle htmlFor="mapUrl">Stater Map for the chapter: </LabelStyle>
                        </div>
                        <FileUpload type="text" name="mapUrl" placeholder="upload" onChange={this.handleImageChange} />
                        <ImgPreview>{$imagePreview}</ImgPreview>

                    </FormDiv>
                </FormStyled>
                <h2>Instructions</h2>
                {int}

                <FormStyled onSubmit={this.handleNewInpSubmit}>
                    <FormDiv>
                        <TitleDiv>
                            <LabelStyle htmlFor="title">Title of instruction:</LabelStyle>
                            <InputStyle type="text" name="title" placeholder="Title of Instruction" onChange={this.handleInpInput} />
                        </TitleDiv>
                        <div>
                            <div>
                                <LabelStyle htmlFor="description">Description of the Instruction: </LabelStyle>
                            </div>
                            <TextAreaStyle name="description" id="" cols="30" rows="10" placeholder="Instuctions" onChange={this.handleInpInput}></TextAreaStyle >
                        </div>
                    
                    <ButtonDiv>
                        <SubmitButton type="submit">Add Instruction</SubmitButton>
                    </ButtonDiv>
                    </FormDiv>
                </FormStyled>

                <h2>Descriptions:</h2>
                {desc}
                <FormStyled onSubmit={this.handleNewDescSubmit}>
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
                <ButtonDiv>
                    <SubmitButton type="submit" form={this.props.index}>Edit Chapter</SubmitButton>
                </ButtonDiv>
            
            </FormContainerTwo>
        )

    }
}

export default EditChapter