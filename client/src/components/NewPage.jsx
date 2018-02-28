import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {NewPageContainer, NewContainer} from './styled components/Containers'
import NewAdventure from './NewAdventure'
import NewChapter from './NewChapter'



class NewPage extends Component {
    state= {
        adventure:{},
        chapters: [],
        encounters: [],
        showChapterForm: false,
        showAdvForm: true,
        redirect: false
        
    }
    handleSubmitAll = async () =>{
        this.state.chapters.encounters = this.state.encounters
        this.state.adventure.chapters = this.state.chapters
        const res = axios.post('api/adventures',  this.state.adventure)
        this.state.chapters.map((chapter)=>{
            axios.post(`api/adventures/${this.state.adventure.id}/chapters`, chapter)
        })
        this.props.addNewAdv(res.data)
        this.setState({redirect: true})


    }
    pushChapter = (chapter)=>{
        this.state.chapters.push(chapter)
    }
    setAdventure = (adventure) =>{
        this.setState({adventure: adventure, showChapterForm: true, showAdvForm: false})
    }
    render(){
        console.log(this.state.adventure) 
        console.log(this.state.chapters)       
        return(
            
            this.state.redirect ? <Redirect to="/adventures" /> :
            <NewPageContainer>
                <div>
                <button onClick={this.handleSubmitAll}>Submit</button>
                </div>
            <NewContainer>
                {this.state.showAdvForm ?
                <NewAdventure addNewAdv={this.props.addNewAdv} setAdventure={this.setAdventure}/> : 
                <h1>{this.state.adventure.title}</h1>  }
                {this.state.showChapterForm ?
                <NewChapter pushChapter={this.pushChapter} /> : null
                }
                <div> EncounterForm</div>
            </NewContainer>
            </NewPageContainer>
        )

    }
}
export default NewPage