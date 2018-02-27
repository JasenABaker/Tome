import React from 'react'
import {FormContainer, FormStyled, FormDiv, TitleDiv, InputStyle, TextAreaStyle, LabelStyle, FileUpload, ButtonDiv} from './styled components/Forms'
import {AddButton} from './styled components/Buttons'

const NewAdventure = (props) =>{
    return(
        <FormContainer>
            <h1>New Adventure</h1>
            <FormStyled>
            <FormDiv>
                <TitleDiv>
                    <LabelStyle htmlFor="title">Title:</LabelStyle>
                    <InputStyle type="text" name="title" placeholder="Title"/>
                </TitleDiv>
                <div>
                    <div>
                    <LabelStyle htmlFor="intro">Introduction: </LabelStyle>
                    </div>
                    <TextAreaStyle name="intro" id="" cols="30" rows="10" placeholder="Text for the introduction"></TextAreaStyle >
                </div>
                <div>
                    <div>
                    <LabelStyle htmlFor="synopsis">Adventure Synopsis: </LabelStyle>
                    </div>
                    <TextAreaStyle  name="synopsos" id="" cols="30" rows="10" placeholder="Write a synopsis of the adventure."></TextAreaStyle >
                </div>
                <div>
                    <div>
                    <LabelStyle htmlFor="running_the_adventure">How to run the Adventure: </LabelStyle>
                    </div>
                    <TextAreaStyle name="running_the_adventure" id="" cols="30" rows="10" placeholder="Notes on how to run the adventure"></TextAreaStyle >
                </div>
                <TitleDiv>
                    <LabelStyle htmlFor="map">Stater Map for the Adventure: </LabelStyle>
                    <FileUpload type="file" name="map" placeholder="upload"/>
                </TitleDiv>
                <div>
                    <div>
                    <LabelStyle htmlFor="hooks_intro">For your hooks to the adventure write a short paragrah about what options the DM may have: </LabelStyle>
                    </div>
                    <TextAreaStyle  name="hooks_intro" id="" cols="30" rows="10" placeholder="Short paragrah introduction your hooks"></TextAreaStyle >
                </div>
                <ButtonDiv>
                    <AddButton>Add Adventure</AddButton>
                </ButtonDiv>
            </FormDiv>
            </FormStyled>
                <h2>Hooks</h2>
            <FormStyled>
                <FormDiv>
                <TitleDiv>
                    <LabelStyle htmlFor="title">Title of hook :</LabelStyle>
                    <InputStyle type="text" name="title" placeholder="Title of Hook"/>
                </TitleDiv>
                <div>
                    <div>
                    <LabelStyle htmlFor="description">Description of the hook: </LabelStyle>
                    </div>
                    <TextAreaStyle  name="description" id="" cols="30" rows="10" placeholder="Text for the hook"></TextAreaStyle >
                </div>
                <ButtonDiv>
                <AddButton>Add Hook</AddButton>
                </ButtonDiv>
                </FormDiv>
            </FormStyled>
            <h2>Additonal Infomation</h2>
            <FormStyled>
                <FormDiv>
                <TitleDiv>
                    <LabelStyle htmlFor="title">Title of Additional Infomation :</LabelStyle>
                    <InputStyle type="text" name="title" placeholder="Title of Additional Infomation"/>
                </TitleDiv>
                <div>
                    <div>
                    <LabelStyle htmlFor="description">The Infomation: </LabelStyle>
                    </div>
                    <TextAreaStyle  name="description" id="" cols="30" rows="10" placeholder="Infomation"></TextAreaStyle >
                </div>
                <ButtonDiv>
                <AddButton>Add Additonal Info</AddButton>
                </ButtonDiv>
            </FormDiv>
            </FormStyled>
        </FormContainer>
    )


}

export default NewAdventure