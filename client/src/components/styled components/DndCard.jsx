import styled from 'styled-components'

export const StatBlock = styled.div`
    height: 100%;
    text-align: left;
    margin: 20px;
    display: inline-block;
    vertical-align: top;
    width: 17%;
    min-width:280px;
    background: #FDF1DC;
    padding: 5px 10px 20px;
    box-shadow: 0 0 1.5em #867453;
`
export const OrangeBorder = styled.div`
    display: block;
    background: #E69A28;
    border: 1px solid #000;
    height: 5px;
    padding: 0 10px 0;
    margin: -10px -10px 0;
    box-sizing: initial;
`
export const OrangeBorderBottom = OrangeBorder.extend`
margin: 15px -10px -20px;

`

export const TaperedRule = styled.svg`
display: block;
width: 100%;
height: 5px;
border: none;
color: #922610;
fill: #922610;
stroke: #922610;

`

export const CreatureHeading = styled.div`
    h1 {
    font-family: 'Libre Baskerville', 'Lora', 'Calisto MT', 'Bookman Old Style', Bookman, 'Goudy Old Style', Garamond, 'Hoefler Text', 'Bitstream Charter', Georgia, serif;
    color: #922610;
    font-size: 23px;
    line-height: 1.2em;
    margin: 10px 0 0;
    letter-spacing: 1px;
    font-variant: small-caps;
    font-weight: bold;
    }
    h2{
    font-weight: normal;
    font-style: italic;
    font-size: 12px;
    line-height: 1.2em;
    margin: 0 0 10px;
    }

`

export const PropertyLine = styled.div`
text-indent: -1em;
padding-left: 1.1em;
line-height: 1.4em;

    h4, p {
        display: inline;
        margin: 0;
        color: #922610;
        font-size: 13.5px;
        line-height: 1.2em;
    }
    h4{
        color: #7A200D;
    }

`
export const PropertyLineFirst = PropertyLine.extend`
    margin: 8px 0 0

`

export const PropertyLineLast = PropertyLine.extend`
    margin: 0 0 10px;

`

export const Abilities = styled.div`
text-align: center;
color: #922610;
h4{
    margin: 10px 0 2px;
    font-size: 14px;
    line-height: 1.2em;
    text-transform: uppercase;
    color: #7A200D;
}
p{
    margin: 0 0 10px;
    line-height: 1.2em;
  }


`
export const AbilitiesDiv = Abilities.extend`
display: inline-block;
vertical-align: middle;
width: 15.5%;
min-width: 40px; 
font-size: 12px;
line-height: 1em;

`

export const PropertyBlock = styled.div`
padding: 10px 2px 0;
h4{
    font-style: italic;
}

h4, p {
    font-size: 13.5px;
  line-height: 1.2em;
  display: inline;
  margin: 0;
}

`
export const Actions = styled.div`
margin: 0 0 20px;
h3{
    border-bottom: 1px solid #7A200D;
    color: #7A200D;
    font-size: 21px;
    font-variant: small-caps;
    font-weight: normal;
    letter-spacing: 1px;
    margin: 20px 0 0;
    padding: 0 0 10px;
    text-indent: 5px;
  }

  :last-child{
    margin: 0;
  }
`

