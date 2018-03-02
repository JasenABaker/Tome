import styled from 'styled-components'


export const Header = styled.header`
    height: 10vh;
    width: 100vw;
    background-color:#D00000;
    border-bottom: 5px solid black;
    font-family: 'MedievalSharp', cursive;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: #ffff;
    h1 {
        font-size: 2.5em;
    }


`

export const HeaderDiv = styled.a`
    display:flex;
    margin-left:10px;
    color: inherit;
    text-decoration: none;
    :hover {
        color: #FFBF00;
        fill: #FFBF00;
    }
`

export const NavBar = styled.div`
    height: 8vh;
    width: 28vw;
    margin-right: 20px;
    display flex;
    justify-content: space-around;
    align-self: flex-end;


`

export const NavButtons = styled.div`
    height: 90%;
    width: 5vw;
    background-color: rgba(0,0,0,0.8);
    display-flex;
    flex-direction-column;
    justify-content: center;
    align-items: center;
    color:rgba(255, 255, 255, 0.5);

    p{
        margin: 0;
        font-size: .68em;
        text-align: center;
        text-transform: uppercase;
    }

    :hover {
        color: rgba(255, 255, 255, 1);
        background: linear-gradient(to bottom, #ffeab5 0%, #ffba08  10%);
        box-shadow: 0 5px 15px rgba(255,186,8, .4);

    }


`




