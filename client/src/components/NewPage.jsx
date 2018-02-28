import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {NewPageContainer, NewContainer} from './styled components/Containers'
import {SubmitButton} from './styled components/Buttons'
import NewAdventure from './NewAdventure'
import NewChapter from './NewChapter'
import NewEncounter from './NewEncounter'


class NewPage extends Component {
    state= {
        adventure:{},
        chapters: [],
        encounters: [],
        showEncounterForm: true,
        showChapterForm: false,
        showAdvForm: true,
        redirect: false
        
    }
    handleSubmitAll = async () =>{
        // const adventure = {...this.state.adventure}
        // const resAdv = await axios.post('api/adventures',  this.state.adventure)
        // adventure.id = resAdv.data.id
        // await this.state.chapters.map((chapter)=>{
        // const resChap = axios.post(`api/adventures/${adventure.id}/chapters`, chapter)
        //     })
        // await this.state.encounters.map((enc)=>{
        //     const resEnc = axios.post(`api/encounter`, enc)
        // })
        this.props.addNewAdv(this.state.adventure)
        this.setState({redirect: true})


    }
    pushChapter = (chapter)=>{
        this.state.chapters.unshift(chapter)
    }
    setAdventure = (adventure) =>{
        this.setState({adventure: adventure, showChapterForm: true, showAdvForm: false})
    }
    pushEncounter = (encounter) => {
        this.state.encounters.unshift(encounter)
    }
    setChapter = () =>{
        this.setState({showChapterForm: false, showEncounterForm: true})
    }
    render(){     
        return(
            
            this.state.redirect ? <Redirect to="/adventures" /> :
            <NewPageContainer>
                
                <SubmitButton onClick={this.handleSubmitAll}>Submit</SubmitButton>
               
            <NewContainer>
                {this.state.showAdvForm ?
                <NewAdventure addNewAdv={this.props.addNewAdv} setAdventure={this.setAdventure}/> : 
                <h1>{this.state.adventure.title}</h1>  }
                {this.state.showChapterForm ?
                <NewChapter pushChapter={this.pushChapter} setChapter={this.setChapter} advenId={this.state.adventure.id} /> : <h1>Chapters</h1> 
                }
                {this.state.showEncounterForm ? <NewEncounter  chapters={this.state.chapters} pushEncounter={this.pushEncounter} />: <h1>Encounters</h1>}
            
            </NewContainer>
            </NewPageContainer>
        )

    }
}
export default NewPage