import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {NewPageContainer, NewContainer} from './styled components/Containers'
import {SubmitButton} from './styled components/Buttons'
import EditAdventure from './EditAdventure'
import EditChapter from './EditChapter'



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
        let enc = null
        let crea = null
        
        resChap.data.map((chap)=>{
            enc = resEnc.data.filter((encz)=>{
                encz.chapter_id === chap.id
                return encz
            })})
        
        if (enc) {
        enc.map((enc)=>{
            crea = resCrea.data.filter((cre)=>{
                cre.encounter_id = enc.id
                return cre
            })
        })
        }else {
            crea = null
        }
        this.setState({pageNotLoaded: false, adventure: resAdv.data, chapters: resChap.data, encounters: enc, creatures: crea})
    }

    updateAdventure = (adv)=>{
        this.setState({adventure: adv})
    }

    handleSubmitAll = async () =>{
        this.setState({redirect: true})
    }

    
    render(){
        return(
            this.state.pageNotLoaded ? <div></div> :
            this.state.redirect ? <Redirect to="/adventures" /> :
            <NewPageContainer>
                <SubmitButton onClick={this.handleSubmitAll}>Submit</SubmitButton>
                <NewContainer>
                    <EditAdventure adventure={this.state.adventure} {...this.props} upadateAdventure={this.upadateAdventure}/>
                    
                    {this.state.chapters.map((chap, index)=>{
                        console.log(chap.id)
                        return(
                            
                            <EditChapter chapter={chap}  index ={chap.id} {...this.props} />
                        )
                    })}
                                    
                </NewContainer>
            </NewPageContainer>
        )
    }
}


export default EditPage