import styled from 'styled-components'



export const FormContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 30px 10px;

    h1, h2 {
        font-size: 1.5em;
        color:#FFBA08;
    }

    @media screen and (min-width: 500px){
        width: 30vw;
    }

`
export const FormContainerTwo = FormContainer.extend`
    justify-content: flex-start;
`

export const FormStyled = styled.form`
    min-height: 30vh;
    width: 100%;

`
export const FormDiv = styled.div`
    height: 100%;
    width: 99%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    background-color:#162126;
    border: 1px solid black;
    color: white;

`

export const TitleDiv = styled.div`
    margin: 10px 0;
    height: 50px;
    width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InputStyle = styled.input`
    font-size: .9em;
    height: 25px;
    width: 70%;
    border: 2px solid black;
`

export const TextAreaStyle = styled.textarea`
    width: 95%;
    font-size: 18px;
    margin: 5px 0 5px 8px;
    border: 2px solid black;

`

export const LabelStyle = styled.label`
    font-size: 1.1 em;
    font-weight: 900;
    color: #FFFFFF;
    margin-left: 10px;
`

export const FileUpload = styled.input`
    margin: 5px 10px;
    height: 50px;
    width: 90%;
    background-color: #003D5B;
    color: #FFFFFF;
    font-size: 18px;
`

export const ButtonDiv = styled.div`
    min-height: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const SubmitButton = styled.button`
height: 40px;
width: 100px;
border-radius: 10px;
color: rgba(255, 255, 255, 0.8);
font-size: .9em;
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
background-color: #3F88C5;
text-align: center;
border: none;
outline-style:none;

:hover {
    background: linear-gradient(to bottom, #83a7c4 0%,#3f88c5 80%);
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(63,136,197, .4)
}
`
export const DeleteButton = SubmitButton.extend`
    background-color: #D00000;

    :hover {
        background: linear-gradient(to bottom, #DC4545 0%,#D00000 80%);
        box-shadow: 0 5px 15px rgba(208,0,0, .4)
    }
`

export const SubmitForm = styled.button`
    height: 50px;
    width: 150px;
    background-color:#011627;
    color: white;
    font-size: .8em;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    outline-style:none;

    :hover {
        background-color:#182B3A;
        box-shadow: 0 5px 15px rgba(1,22,39, .4)
    }
`

export const FinishButton = SubmitForm.extend`
    background-color: #D00000;

    :hover {
        background-color: #DC4545;
        box-shadow: 0 5px 15px rgba(208,0,0, .4);
    }
`

export const MonsterContainer = styled.div`
    margin: 10px 0 5px 11px;
    height: 80vh;
    width: 95%;
    background-color: #F9F5D9;
    border: 1px solid black;
    display: flex;
    justify-content: space-between:
    align-items: center;
    overflow: scroll;

`

export const Preview = styled.div`
    height: 20vh;
    width: 90%;
    color: #FFBA08;
    overflow: scroll;
    background-color: #10181B;
    border: 1px solid black;
     h4 {
        color: #003D5B;
     }

`

export const ImgPreview = styled.div`
     margin-left: 11px;
     margin-bottom: 5px;
     height: 200px;
     width: 95%;

     img {
         height:100%;
         width: 100%;
     }

`