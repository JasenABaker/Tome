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
    height: 15vh;
    width: 50vw;
    margin-right: 20px;
    display flex;
    justify-content: space-around;
    align-self: flex-end;
    @media screen and (max-width: 500px){
        display: none;
    }
`

export const NavButtons = styled.div`
    height: 85px;
    width: 85px;
    background-color: rgba(0,0,0,0.6);
    display-flex;
    flex-direction-column;
    justify-content: center;
    align-items: center;
    color:rgba(255, 255, 255, 1);

    p{
        margin: 0;
        font-size: .75em;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
    }

    :hover {
        color: rgba(255, 255, 255, 1);
        background: linear-gradient(to bottom, #ffeab5 0%, #ffba08  10%);
        box-shadow: 0 5px 15px rgba(255,186,8, .4);

    }


`




