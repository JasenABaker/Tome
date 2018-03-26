import styled from 'styled-components'
import image from './images/dnd.jpg'
import Splash from './images/splash.jpg'



export const PageContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    background-color:#F7F9F9;
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
    min-height: 90vh;
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
    background: radial-gradient(ellipse at center, rgba(93,145,128,1) 23%,rgba(19,111,99,1) 88%);
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
    margin: 20px;
    height: 65vh;
    width: 40vw;
    border: 4px solid black;
    background-color:#F9F5D9;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
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
    justify-content: space-around;
    align-items: center;
    @media screen and (min-width: 500px) {
        flex-direction: row;
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
        min-height: 87vh;
        width: 50vw;
        overflow: scroll;
        justify-content: flex-start;
        align-items: center;
    }

`
export const MapView = styled.div`
    height: 43vh;
    width: 95vw;
    overflow: scroll;
    @media screen and (min-width: 500px){
        height: 87vh;
        width:50vw;
    }
  

`

export const MonsterCardContainer = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;

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
    min-height: 50vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    @media screen and (min-width: 500px){
        padding: 0 20px;
        min-height: 45vh;
        width: 46vw;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: hidden;
    
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
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 500px) {
        width: 45vw;

    }

`

export const ToolBar = styled.div `
    height: 60px;
    width: 90%;
    display: flex;
`




