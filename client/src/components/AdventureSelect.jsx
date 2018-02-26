import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'
import {ContainerOne, LeftSide, AdvCard, InsideLeft, CardContainer, ButtonContainer, RightSide} from './styled components/Containers'
import { AddButton, EditButton, DeleteButton, PlayButton} from './styled components/Buttons'
import AdventureShow from './AdventureShow'



class AdventureSelect extends Component {
    state ={
        adventure: {},
        showAdventure: false
    }
    adventureFind = async (advenId) => {
        const res = await axios.get(`/api/adventures/${advenId}`)
        console.log(res.data)
        this.setState({adventure: res.data, showAdventure: true})
    }
    
    render(){
    
    
        return(
            <ContainerOne>
                <LeftSide>
                    <AddButton>
                        Add
                    </AddButton>
                    <InsideLeft>
                    
            {this.props.adventures.map((adven)=>{
                return(
                    <CardContainer>
                <AdvCard onClick={()=>this.adventureFind(adven.id)}>
                {adven.title}
                </AdvCard>
                { this.state.showAdventure ?
                <ButtonContainer>
                    <Link to={`/adventures/${adven.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <PlayButton>Play</PlayButton>
                    </Link> 
                <EditButton>
                edit
                </EditButton>
                <DeleteButton>
                delete
                </DeleteButton>
                </ButtonContainer> :
                null
                }
                </CardContainer>
                )
            })}
                
            </InsideLeft>
            </LeftSide>
            <RightSide>
                {
                    this.state.showAdventure ? <AdventureShow adventure={this.state.adventure}/> : null
                }
            </RightSide>
        </ContainerOne>
        )
    }
}

export default AdventureSelect
