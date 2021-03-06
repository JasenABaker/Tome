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
        await axios.delete(`/api/adventures/${advenId}`)
        const adventure = this.state.adventure
        this.props.removeAdv(adventure)
    }
    beforeDelete = (advenId, adven) => {
        if(window.confirm(`Do you wish to delete ${adven.title}?`)){
            this.handleDelete(advenId)
        }
    }

    handleDelete = (advenId) => {
        this.removeAdventure(advenId)
        this.setState({showAdventure: false})
    }
    render(){
    
    
        return(
            <ContainerOne>
                <LeftSide>
                
                    
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
                <Link to={`/adventures/${adven.id}/edit`} style={{ textDecoration: 'none', color: 'inherit' }}> 
                <EditButton>
                edit
                </EditButton>
                </Link>
                <DeleteButton onClick={()=>this.beforeDelete(adven.id, adven)} >
                delete
                </DeleteButton>
                </ButtonContainer> :
                null
                }
                </CardContainer>
                )
            })}
                
            </LeftSide>
            <RightSide>
                {
                    this.state.showAdventure ? <AdventureShow adventure={this.state.adventure} beforeDelete={this.beforeDelete}/> : null
                }
            </RightSide>
        </ContainerOne>
        )
    }
}

export default AdventureSelect
