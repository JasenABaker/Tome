import React, { Component } from 'react'
import axios from 'axios'
import {AdvPageContainer, AdvView, MapView} from './styled components/Containers'




class Adventure extends Component {
    state ={
        adventure: {},
        chapters: [],
        encounters: []
    }
    async componentWillMount () {
        const resAdv = await axios.get(`/api/adventures/${this.props.match.params.id}`)
        // console.log(resAdv.data)
        const resChap = await axios.get(`/api/adventures/${this.props.match.params.id}/chapters`)
        // console.log(resChap.data)
        const resEnc = await axios.get('/api/encounter')
        // console.log(resEnc.data)

        this.setState({adventure: resAdv.data, chapters: resChap.data, encounters: resEnc.data})

    }

    render(){
        return(
            <AdvPageContainer>
                <AdvView />
                <MapView />
            </AdvPageContainer>
        )
    }
}

export default Adventure