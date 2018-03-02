import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {NewPageContainer, NewContainer} from './styled components/Containers'
import {SubmitButton} from './styled components/Buttons'
import EditAdventure from './EditAdventure'
import EditChapter from './EditChapter'
import EditEncounter from './EditEncounter'


class EditPage extends Component {
    state = {
        adventure: {},
        chapters: [],
        encounters: [],
        creatures: [],
        pageNotLoaded: true,
        redirect: false,
        selectedChapter: {},
    }
    async componentWillMount () {
        const resAdv = await axios.get(`/api/adventures/${this.props.match.params.id}`)
        const resChap = await axios.get(`/api/adventures/${this.props.match.params.id}/chapters`)
        const resEnc = await axios.get(`/api/encounter`)
        const resCrea = await axios.get(`/api/encounter_creatures`)
        console.log(resEnc.data)
        this.setState({pageNotLoaded: false, adventure: resAdv.data, chapters: resChap.data, encounters: resEnc.data, creatures: resCrea.data})
    }

    updateAdventure = (adv)=>{
        this.setState({adventure: adv})
    }

    handleSubmitAll = async () =>{
        this.setState({redirect: true})
    }
    updateChapter = (chap) =>{
        const upchap = this.state.chapters.indexOf(chap)
        const chapters = [...this.state.chapters]
        chapters.splice(upchap, 1, chap)
        this.componentWillMount()
        this.setState({chapters})
        
    }
    updateEncounter = (enc) => {
        const upEnc = this.state.encounters.indexOf(enc)
        const encounters = [...this.state.encounters]
        encounters.splice(upEnc, 1, enc)
        this.componentWillMount()
        this.setState({encounters})

    }

    
    render(){
        return(
            this.state.pageNotLoaded ? <div></div> :
            this.state.redirect ? <Redirect to="/adventures" /> :
            <NewPageContainer>
                <SubmitButton onClick={this.handleSubmitAll}>Submit</SubmitButton>
                <NewContainer>
                    <EditAdventure adventure={this.state.adventure} {...this.props} upadateAdventure={this.upadateAdventure}/>
                    <EditChapter chapters={this.state.chapters}  {...this.props}  updateChapter={this.updateChapter}/>
                    <EditEncounter chapters={this.state.chapters} encounters={this.state.encounters} updateEncounter={this.updateEncounter} />
                                    
                </NewContainer>
            </NewPageContainer>
        )
    }
}


export default EditPage