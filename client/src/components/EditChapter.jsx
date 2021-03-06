import React, { Component } from 'react'
import axios from 'axios'
import { FormContainerTwo, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, FileUpload, ButtonDiv, SubmitButton, ImgPreview, DeleteButton, SubmitForm, FinishButton } from './styled components/Forms'
import { HeaderTab } from './styled components/Tabs'
import { HeadingContainer } from './styled components/Containers'
import NewChapter from './NewChapter'

class EditChapter extends Component {
    state = {
        editChapter: {},
        descs: [],
        desc: "",
        instructions: [],
        inp: {},
        imagePreviewUrl: "",
        chapterNotSelected: true,
        addNewChapter: false
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

    handleChapSelect = (chap) => {
        this.setState({ editChapter: chap, chapterNotSelected: false, addNewChapter: false })
    }


    editChapterPatch = async () => {
        try {
            const res = await axios.patch(`/api/adventures/${this.props.match.params.id}/chapters/${this.state.editChapter.id}`, this.state.editChapter)
            this.props.updateChapter(res.data)
            alert(`${this.state.editChapter.title} updated!`)
        } catch (error) {
            console.log(error)
            alert(error)
        }

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
    handleDescEdit = (event, desc) => {
        const editChap = { ...this.state.editChapter}
        const editDesc = editChap.descriptions.indexOf(desc)
        editChap.descriptions[editDesc] = event.target.value
        this.setState({editChapter: editChap})
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
    handleInstDelete = (event, inst) => {
        event.preventDefault()
        const chap = { ...this.state.editChapter }
        const instToRemove = this.state.editChapter.instructions.indexOf(inst)
        const editInst = [...chap.instructions]
        if (window.confirm(`Are you sure you want to delete ${inst.title}?`)) {
            editInst.splice(instToRemove, 1)
            chap.instructions = editInst
            this.setState({ editChapter: chap })
        }

    }
    handleDescDelete = (event, desc) => {
        event.preventDefault()
        const chap = { ...this.state.editChapter }
        const descToRemove = this.state.editChapter.descriptions.indexOf(desc)
        const editDesc = [...chap.descriptions]
        if (window.confirm(`Are you sure you want to delete this description?`)) {
            editDesc.splice(descToRemove, 1)
            chap.descriptions = editDesc
            this.setState({ editChapter: chap })
        }
    }

    addNewChapter = () => {
        this.setState({ addNewChapter: true })
    }
    beforeChapterSet = () => {
        if (window.confirm(`Are You Done Adding Chapters?`)) {
            this.setState({ addNewChapter: false })
        }
    }

    deleteChap = async () => {
        try {
            const resChap = await axios.delete(`/api/adventures/${this.props.match.params.id}/chapters/${this.state.editChapter.id}`)
            alert(`Chapter was deleted.`)
            this.props.removeChapter(resChap.data)
        } catch (error) {
            console.log(error)
            alert(`Something went wrong ${this.state.editChapter.title} still exists.`)
        }
    }

    handleChapDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${this.state.editChapter.title}?`)) {
            this.deleteChap()
            this.setState({ chapterNotSelected: true })
        }
    }




    render() {
        let desc = null
        let int = null
        let { imagePreviewUrl } = {
            file: this.state.file,
            imagePreviewUrl: this.state.imagePreviewUrl
        }
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="nothing" />)

        } else if (this.state.editChapter.mapUrl) {
            $imagePreview = (<img src={this.state.editChapter.mapUrl} alt={this.state.chapterNotSelected.title} />);
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
                                <TextAreaStyle name="descriptions" id="" cols="30" rows="10" placeholder="Infomation" onChange={(event) => this.handleDescEdit(event, des)} value={des}></TextAreaStyle >
                            </div>
                            <ButtonDiv>
                                <DeleteButton onClick={(event) => this.handleDescDelete(event, des)}>Delete Description</DeleteButton>
                            </ButtonDiv>
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
                            <ButtonDiv>
                                <DeleteButton onClick={(event) => this.handleInstDelete(event, int)}>Delete {int.title}</DeleteButton>
                            </ButtonDiv>
                        </FormDiv>

                    </FormStyled>
                )
            })
        } else {
            int = null
        }

        return (
            <FormContainerTwo>
                <h1>Chapters</h1>
                <HeadingContainer>
                    {this.props.chapters.map((chap) => {
                        return (
                            <HeaderTab onClick={() => this.handleChapSelect(chap)}>{chap.title}</HeaderTab>
                        )
                    })}

                </HeadingContainer>
                <HeadingContainer>
                    <FinishButton onClick={this.addNewChapter}>Add New Chapter</FinishButton>
                </HeadingContainer>
                {this.state.addNewChapter ?
                    <NewChapter pushChapter={this.props.pushChapter} beforeChapterSet={this.beforeChapterSet} advenId={this.props.match.params.id} /> :
                    this.state.chapterNotSelected ? <div></div> :
                        <div>
                            <h1>Edit {this.state.editChapter.title}</h1>
                            <FormStyled onSubmit={this.handleChapSubmit} id={this.state.editChapter}>
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
                                <SubmitForm type="submit" form={this.state.editChapter}>Edit Chapter</SubmitForm>
                            </ButtonDiv>
                            <ButtonDiv>
                                <FinishButton onClick={this.handleChapDelete}>Delete {this.state.editChapter.title}</FinishButton>
                            </ButtonDiv>
                        </div>
                }

            </FormContainerTwo>
        )

    }
}

export default EditChapter