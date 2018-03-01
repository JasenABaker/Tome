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
    removeAdventure = async (advenId) => {
        const res = await axios.delete(`/api/adventures/${advenId}`)
        const adventure = this.state.adventure
        this.props.removeAdv(adventure)
    }

    handleDelete = (advenId) => {
        this.removeAdventure(advenId)
        this.setState({showAdventure: false})
    }
    render(){
    
    
        return(
            <ContainerOne>
                <LeftSide>
                    
                <Link to={'/new'} style={{ textDecoration: 'none', color: 'inherit' }}><AddButton>
                        Add
                    </AddButton>
                </Link>
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
                <DeleteButton onClick={()=>this.handleDelete(adven.id)} >
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
                    this.state.showAdventure ? <AdventureShow adventure={this.state.adventure} handleDelete={this.handleDelete}/> : null
                }
            </RightSide>
        </ContainerOne>
        )
    }
}

export default AdventureSelect
