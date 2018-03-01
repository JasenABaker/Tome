import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {NewPageContainer, NewContainer} from './styled components/Containers'
import {SubmitButton} from './styled components/Buttons'



class EditPage extends Component {
    state = {
        adventure: {},
        chapters: [],
        encounters: [],
        creatures: [],
        pageNotLoaded: true,
        redirect: false
    }
    async componentWillMount () {
        const resAdv = await axios.get(`/api/adventures/${this.props.match.params.id}`)
        const resChap = await axios.get(`/api/adventures/${this.props.match.params.id}/chapters`)
        const resEnc = await axios.get(`/api/encounter`)
        const resCrea = await axios.get(`/api/encounter_creatures`)
        let enc = null
        resChap.data.map((chap)=>{
            enc = resEnc.data.filter((encz)=>{
                encz.chapter_id === chap.id
                return encz
            })
        })
        let crea = null
        enc.map((enc)=>{
            crea = resCrea.data.filter((cre)=>{
                cre.encounter_id = enc.id
                return cre
            })
        })
        this.setState({pageNotLoaded: false, adventure: resAdv.data, chapters: resChap.data, encounters: enc, creatures: crea})
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
                </NewContainer>
            </NewPageContainer>
        )
    }
}


export default EditPage