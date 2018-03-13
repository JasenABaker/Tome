import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {NewPageContainer, NewContainer} from './styled components/Containers'
import {SubmitButton} from './styled components/Buttons'
import NewAdventure from './NewAdventure'
import NewChapter from './NewChapter'
import NewEncounter from './NewEncounter'
import NewMonsterForm from './NewMonsterForm'
import NewAdv from './NewAdv'
import NewChap from './NewChap'
import NewEnc from './NewEnc'


class NewPage extends Component {
    state= {
        adventure:{},
        chapters: [],
        encounters: [],
        showEncounterForm: false,
        showChapterForm: false,
        showAdvForm: true,
        showMonsterForm: false,
        redirect: false,
        chapFormComplete: false,
        encFormComplete: false,
        
    }
    beforeSubmitAll = () => {
        if(window.confirm(`Are you finished creating an adventure?`)){
            this.handleSubmitAll()
        }
    }
    handleSubmitAll = async () =>{
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
    beforeChapterSet = () => {
        if(window.confirm(`Are You Done Adding Chapters?`)){
            this.setChapter()
        }
    }
    setChapter = () =>{
        this.setState({showChapterForm: false, chapFormComplete: true, showEncounterForm: true})
    }
    beforeEncounterSet = () => {
        if(window.confirm('Are You Done Adding Encounters?')){
            this.setEncounter()
        }
    }
    setEncounter = () => {

        this.setState({showEncounterForm: false, encFormComplete: true, showMonsterForm: true})
    }
    render(){     
        return(
            
            this.state.redirect ? <Redirect to="/adventures" /> :
            <NewPageContainer>
                
                <SubmitButton onClick={this.beforeSubmitAll}>Submit</SubmitButton>
            <NewContainer>
                {this.state.showAdvForm ?
                <NewAdventure addNewAdv={this.props.addNewAdv} setAdventure={this.setAdventure}/> : <NewAdv adventure={this.state.adventure} /> }
                {this.state.showChapterForm ?
                <NewChapter pushChapter={this.pushChapter} beforeChapterSet={this.beforeChapterSet} advenId={this.state.adventure.id} /> :
                this.state.chapFormComplete ? 
                this.state.chapters.map((chap)=> {
                    return (<NewChap chapter={chap}/>
                )}) : <h1>Chapters</h1>
                } 
                {this.state.showEncounterForm ? <NewEncounter  chapters={this.state.chapters} pushEncounter={this.pushEncounter}  beforeEncounterSet={this.beforeEncounterSet}/>: 
                this.state.encFormComplete ?
                this.state.encounters.map((enc)=>{
                    return (
                        <NewEnc encounters={enc} />
                    )
                }) : <h1>Encounters</h1>}
                {this.state.showMonsterForm ? <NewMonsterForm encounters={this.state.encounters}/> : null}
            </NewContainer>
            </NewPageContainer>
        )

    }
}
export default NewPage