import styled from 'styled-components'



export const FormContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;

    h1, h2 {
        font-size: 1.5em;
        color:#FFBA08;
    }

    @media screen and (min-width: 500px){
        width: 30vw;
    }

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
    margin-right: 10px;
    height: 50px;
    width: 50%;
    background-color: #003D5B;
    color: #FFFFFF;
    font-size: 18px;
`

export const ButtonDiv = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
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