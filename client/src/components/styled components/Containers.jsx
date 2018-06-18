import styled from 'styled-components'
import image from './images/dnd.jpg'
import Splash from './images/splash.jpg'



export const PageContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    background-color:#1F262C;
    overflow: auto;
`

export const HomeContainer = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const HomeCard = styled.div`
    height: 80vh;
    width: 60vw;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background: linear-gradient(0deg, rgba(63,136,197,0.8), rgba(63,136,197,0.8)), url(${image}) center no-repeat;
    background-size: cover;
    box-shadow: 0 0 1.5em #867453;

    p{
        width: 90%;
        text-align: center;
    }
    span{
        font-weight: 700;
        color:#D00000;
    }
    h1{
        margin: 0 auto;
    }
    h3{
        margin-bottom: none;
    }

    @media screen and (min-width: 500px) {
        height: 50vh;

        span{
            display:none;
        }
    }

`

export const ContainerOne = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
`

export const LeftSide = styled.div`
    margin-top: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 500px){
        width: 50%;
    }
`
export const RightSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 500px){
        display: none;
    }
`
export const InsideLeft = styled.div`
    min-height: 50vh;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
export const CardContainer = InsideLeft.extend`
    min-height:40%;
    justify-content: space-between;
`
export const ButtonContainer = styled.div`
    height: 50px;
    width: 200px;
    display: flex;
    justify-content: space-around;
    @media screen and (min-width: 500px) {
        display: none;
    }
`

export const ButtonContainer2 = styled.div`
        margin-left: 20px;
        width: 40vw;
        height: 60px;
        display: flex;
        justify-content: space-around;

`

export const AdvCard = styled.button`
    margin-bottom: 10px;
    height: 50px;
    width: 200px;
    background: #7FB069;
    color: rgba(255,255,255,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: none;
    outline-style:none;

        :hover {
            background: radial-gradient(ellipse at center, rgba(135,229,227,1) 23%,rgba(9,224,196,1) 88%);
        }
        :focus {
            background: radial-gradient(ellipse at center, rgba(135,229,227,1) 23%,rgba(9,224,196,1) 88%);
        }
        :active {
            background: radial-gradient(ellipse at center, rgba(135,229,227,1) 23%,rgba(9,224,196,1) 88%);
        }
        :target {
            background: radial-gradient(ellipse at center, rgba(135,229,227,1) 23%,rgba(9,224,196,1) 88%);
        }

`

export const AdvShowPage = styled.div `
    padding: 10px 0;
    margin: 20px;
    height: 70vh;
    width: 40vw;
    background-color:#C4C4C4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    p{
        padding: 0 10px;
        border: 1px solid black;
        margin: 10px 10px;
        overflow: scroll;
    }
`
export const AdvPageContainer = styled.div`
    margin-top: 10px;
    min-height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 500px) {
        position: relative;
        justify-content: none;
        align-items: flex-start;
        margin: 0 10px;
    }

`
export const AdvPageContainerTwo = styled.div`
    min-height: 90vh;
    width:100vw;
    display: flex;
    flex-direction: column;
`

export const AdvView = styled.div`
    min-height: 43vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
    overflow: scroll;

    @media screen and (min-width: 500px) {
    
        height: 80vh;
        width: 40vw;
        justify-content: flex-start;
        background-color: white;
    }

`
export const AdvViewCon = styled.div`
    position: absolute;
    z-index: 1;

`
export const MapView = styled.div`
    
    height: 43vh;
    width: 95vw;
    border: 1px solid black;
    background-color: black;
    overflow: scroll;
    @media screen and (min-width: 500px){
        position: relative;
        z-index: 0;
        height: 80vh;
        width: 98vw;
        margin-right: 10px;
    }

`

export const MonsterCardContainer = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    overflow: scroll;
    border-right: 1px solid grey;
    border-left: 1px solid grey;
    background-color: lightgray;
    padding: 0px 5px 5px 5px;

`

export const NewPageContainer = styled.div`
    min-height: 90vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: auto;
`

export const NewContainer = styled.div`
min-height: 90vh;
min-width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
@media screen and (min-width: 500px){
    flex-direction: row;
    overflowY: scroll;
}

`

export const AdvHeader = styled.div`
    height: 20vh;
    width: 100vw;
    display: flex;
    background: linear-gradient(0deg, rgba(34,51,59,0.8), rgba(34,51,59,0.8)), url(${Splash}) center no-repeat;
    color: white;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'MedievalSharp', cursive;
        margin: 30px 0 0 20px;
        font-size: 34px;
    }

    @media screen and (min-width: 500px) {
        justify-content: space-between;
        h1{
            font-size: 48px;
        }
    }
`

export const AdvInfoSection = styled.div`
    width: 95vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    @media screen and (min-width: 500px){
        width: 100%;
        align-items: flex-start;
        flex-direction: column;
    }

`
export const HeadingContainer = styled.div`
    min-height: 15vh;
    width: 95vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 0;
    @media screen and (min-width: 500px){
        width: 25vw;

    }

`
export const SectionSelction = HeadingContainer.extend`
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0;
    margin-bottom: 5px;
    @media screen and (min-width: 500px) {
        width: 100%;
    }

`

export const ToolBar = styled.div `
    height: 60px;
    width: 90%;
    display: flex;
`

export const DropDownContainer = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
`
export const TopBarContainer = DropDownContainer.extend`
    width: 30%;
    justify-content: space-around;
    align-items: center;

`

export const AdvSecCon = styled.div`
    min-height: 15vh
    max-heght: 110vh;
`

export const Container = styled.div`
width: 25vw;
display: flex;
flex-direction: column;
align-items: center;
overflow: scroll;
`




