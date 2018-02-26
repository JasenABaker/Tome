import React, { Component } from 'react'
import axios from 'axios'
import {AdvPageContainer, AdvView, MapView} from './styled components/Containers'




class Adventure extends Component {

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