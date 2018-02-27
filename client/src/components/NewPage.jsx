import React, { Component } from 'react'
import axios from 'axios'
import {NewPageContainer} from './styled components/Containers'
import NewAdventure from './NewAdventure'



class NewPage extends Component {

    render(){
        return(
            <NewPageContainer>
                <NewAdventure />
                <div> ChapterForm</div>
                <div> EncounterForm</div>
            </NewPageContainer>
        )

    }
}
export default NewPage