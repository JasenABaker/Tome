import styled from 'styled-components'




export const MainTab = styled.div`
        height: 60px;
        width: 90vw;
        background: radial-gradient(ellipse at center, rgba(62,76,84,1) 23%,rgba(34,51,59,1) 88%);
        color: white;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        border-radius: 5px;
        padding-left: 10px;
        cursor: pointer;
        @media screen and (min-width: 500px) {
            width: 255px;
            height: 40px;
        }
`

export const ContentDiv = styled.div`
        width: 90vw;
        margin-bottom: 10px;
        @media screen and (min-width: 500px) {
            width: 100%;
        }

`



export const Content = styled.div`
        height: 50vh;
        width: 90vw;
        overflow: scroll;
        border-right: 1px solid grey;
        border-left: 1px solid grey;
        border-bottom: 1px solid grey;
        background-color:white;
        padding: 5px 5px 0 5px;


        @media screen and (min-width: 500px) {
            height: 20vh;
            width: 98%;
        }

`

export const HeaderTab = styled.div`
        height: 30px;
        width: 150px;
        background-color: #3E92cc;
        color: white;
        font-weight: 800;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .5em;

        :hover {
            background-color: #D8315B;

        }

`


export const AdvTab = MainTab.extend`
        height: 20px;
        max-width: 99vw;
        background: radial-gradient(ellipse at center, rgba(51,66,79,1) 28%,rgba(1,22,39,1) 99%);
        border-radius: 0;
        padding-left: 30px;


        @media screen and (min-width: 500px){
            width: 20vw;
        }

`

export const SubTab = AdvTab.extend`
        border-radius: 10px;
    @media screen and (min-width: 500px){
        min-width: 20vw;
    }

`