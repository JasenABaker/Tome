import styled from 'styled-components'




export const MainTab = styled.div`
        height: 60px;
        width: 95vw;
        background: radial-gradient(ellipse at center, rgba(62,76,84,1) 23%,rgba(34,51,59,1) 88%);
        color: white;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        border-radius: 5px;
        padding-left: 10px;
        cursor: pointer;
        @media screen and (min-width: 500px) {
            width: 300px;
            height: 40px;
        }
`

export const ContentDiv = styled.div`
        max-height: 50vh;
        width: 95vw;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (min-width: 500px) {
            width: 300px;
        }

`

export const Content = styled.div`
        height: 50vh;
        width: 95vw;
        overflow: scroll;
        border-right: 1px solid grey;
        border-left: 1px solid grey;
        border-bottom: 1px solid grey;
        background-color:white;
        padding: 5px 5px 0 5px;


        @media screen and (min-width: 500px) {
            height: 20vh;
            width: 295px;
        }

`

export const HeaderTab = styled.div`
        height: 30px;
        width: 150px;
        background: ${props => props.theme.main};
        color: white;
        font-weight: 800;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .5em;

        :hover {
            backgound:#D8315B;

        }

`
HeaderTab.defaultProps = {
    theme:{
        main:'#3E92CC'
    }
}

export const active = {
    theme:{ 
        main:"#D8315B"
    }
}