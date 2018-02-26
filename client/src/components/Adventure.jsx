import React, { Component } from 'react'
import axios from 'axios'
import {AdvPageContainer, AdvView, MapView} from './styled components/Containers'
import AdventureTab from './AdventureTab'




class Adventure extends Component {
    state ={
        adventure: {},
        chapters: [],
        encounters: [],
        creatures: [],
        stateNotLoaded: true
    }
    async componentWillMount () {
        const resAdv = await axios.get(`/api/adventures/${this.props.match.params.id}`)
        // console.log(resAdv.data)
        const resChap = await axios.get(`/api/adventures/${this.props.match.params.id}/chapters`)
        // console.log(resChap.data)
        const resEnc = await axios.get('/api/encounter')
        // console.log(resEnc.data)
        const resCre = await axios.get('/api/encounter_creatures')
        
        this.setState({adventure: resAdv.data, 
            chapters: resChap.data, 
            encounters: resEnc.data, 
            creatures: resCre.data,
            stateNotLoaded: false})

    }

    render(){
        const adventure = this.state.adventure
        return(
            <AdvPageContainer>
                <AdvView>
                    {this.state.stateNotLoaded ? <div></div> :
                    <AdventureTab adventure={this.state.adventure}/>
                    } 
                </AdvView>
                <MapView />
            </AdvPageContainer>
        )
    }
}

export default Adventure