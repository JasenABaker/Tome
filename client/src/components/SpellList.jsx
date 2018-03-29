import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 80vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 1.5em;
        font-weight: 700;
    }
`
const SpecContainer = styled.div`
    height: 30vh;
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const DescContainer = styled.div`
    height: 40vh;
    width: 95%;
    display: flex;
    flex-direction: column;
`

const Spec = styled.div`
    height: 10vh;
    width: 10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px 10px 10px;
`
const Divider = styled.div`
    height: 5px;
    width: 100%;
    background: #00A6ED;
`

const SpellList = (props) => {
    const spell =  props.spell
    let mat = null
    let high = null
    if(props.spell.material){
        mat = <div><p><strong>Materials. </strong>{spell.material}</p></div>
    } else {
        mat = null
    }
    if(props.spell.higher_level){
        high = <div><p><strong>At Higher Levels. </strong>{spell.higher_level}</p></div>
    } else {
        high = null
    }
    return(
        <Container>
            <h2>{spell.name}</h2>
            <SpecContainer>
            <Spec><strong>Level</strong><strong>{spell.level}</strong></Spec>
            <Spec><strong>Casting Time</strong><strong>{spell.casting_time}</strong></Spec>
            <Spec><strong>Range/Area</strong><strong>{spell.range}</strong></Spec>
            <Spec><strong>Components</strong><strong>{spell.components.map((comp)=>{
                return(
                    <span>
                        {comp}
                    </span>
                )
            })}</strong></Spec>
            <Spec><strong>Duration</strong><strong>{spell.duration}</strong></Spec>
            <Spec><strong>School</strong><strong>{spell.school.name}</strong></Spec>
            <Spec><strong>ritual</strong><strong>{spell.ritual}</strong></Spec>
            <Spec><strong>concentration</strong><strong>{spell.concentration}</strong></Spec>
            </SpecContainer>
            <Divider />
            <DescContainer>
            <div>
                <p>{spell.desc}</p>
            </div>
            {high}
            {mat}
            </DescContainer>
        </Container>
    )


}

export default SpellList