import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 1.5em;
        font-weight: 700;
    }
`
const SpecContainer = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    justifiy-content: space-between;
    flex-wrap: wrap;
`
const DescContainer = styled.div`
    height: 40%;
    width: 80%;
    display: flex;
    flex-direction: column;
`

const Spec = styled.div`
    height: 20vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
`

const SpellList = (props) => {
    const spell =  props.spell
    return(
        <Container>
            <h2>{spell.name}</h2>
            <SpecContainer>
            <Spec><h4>Level</h4><h5>{spell.level}</h5></Spec>
            <Spec><h4>Casting Time</h4><h5>{spell.casting_time}</h5></Spec>
            <Spec><h4>Range/Area</h4><h5>{spell.range}</h5></Spec>
            <Spec><h4>Components</h4><h5>{spell.components.map((comp)=>{
                return(
                    <p>
                        {comp}
                    </p>
                )
            })}</h5></Spec>
            <Spec><h4>Duration</h4><h5>{spell.duration}</h5></Spec>
            <Spec><h4>School</h4><h5>{spell.school.name}</h5></Spec>
            <Spec><h4>ritual</h4><h5>{spell.ritual}</h5></Spec>
            <Spec><h4>concentration</h4><h5>{spell.concentration}</h5></Spec>
            </SpecContainer>
            <DescContainer>
            <div>
                <p>{spell.desc}</p>
            </div>
            <div><span>At Higher Levels</span><p>{spell.higher_level}</p></div>
            <div><span>Materials</span><p>{spell.material}</p></div>
            </DescContainer>
        </Container>
    )


}

export default SpellList