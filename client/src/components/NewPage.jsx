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
        const adventure = {...this.state.adventure}
        const resAdv = await axios.post('api/adventures',  this.state.adventure)
        adventure.id = resAdv.data.id
        await this.state.chapters.map((chapter)=>{
        const resChap = axios.post(`api/adventures/${adventure.id}/chapters`, chapter)
            })
        this.props.addNewAdv(resAdv.data)
        this.setState({redirect: true})


    }
    pushChapter = (chapter)=>{
        this.state.chapters.unshift(chapter)
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