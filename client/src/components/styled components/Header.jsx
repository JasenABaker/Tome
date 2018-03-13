import styled from 'styled-components'


export const Header = styled.header`
    height: 10vh;
    min-width: 100vw;
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
export const HeaderTwoDiv = HeaderDiv.extend`
    font-size: .8em;
    margin-left: 0px;
    margin-right: 10px;
    margin-top: 30px;
    @media screen and (min-width: 500px){
        margin-right: 30px
        font-size: 1em;
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
export const HomeNav = styled.div`
    height: 10vh;
    width: 20vw;
    margin-right: 20px;

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
        background: linear-gradient(to bottom, #ffeab5 0%, #ffba08  10%);
        box-shadow: 0 5px 15px rgba(255,186,8, .4);

    }


`

export const NavSpell =  NavButtons.extend`
    :hover {
        background: linear-gradient(to bottom, #8BD6F6 0%, #00A6ED  10%);
        box-shadow: 0 5px 15px rgba(0,166,237, .4);

    }


`
export const NavMon =  NavButtons.extend`
    :hover {
        background: linear-gradient(to bottom, #F39F91 0%, #E94F37  10%);
        box-shadow: 0 5px 15px rgba(233,79,55, .4);

    }


`
export const NavAdv =  NavButtons.extend`
    :hover {
        background: linear-gradient(to bottom, #B9D873 0%, #7FB800  10%);
        box-shadow: 0 5px 15px rgba(127,184,0, .4);

    }


`

export const NavEdit =  NavButtons.extend`
    :hover {
        background: linear-gradient(to bottom, #B898C0 0%, #631D76 10%);
        box-shadow: 0 5px 15px rgba(99,29,118, .4);

    }


`




