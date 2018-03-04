import React, { Component } from 'react'
import axios from 'axios'
import {SkyLightStateless} from 'react-skylight'
import Draggable from 'react-draggable';
import {AdvPageContainer, AdvView, MapView} from './styled components/Containers'
import AdventureTab from './AdventureTab'
import ChaptersTab from './ChaptersTab'
import CreatureList from './CreatureList'




class Adventure extends Component {
    constructor(props){
        super(props);
        }
    
    state ={
        adventure: {},
        chapters: [],
        encounters: [],
        creatures: [],
        creature: {},
        stateNotLoaded: true,
        isDialogOpen: false,

    }
    async componentWillMount () {
        const resAdv = await axios.get(`/api/adventures/${this.props.match.params.id}`)
        // console.log(resAdv.data)
        const resChap = await axios.get(`/api/adventures/${this.props.match.params.id}/chapters`)
        // console.log(resChap.data)
        const resEnc = await axios.get('/api/encounter')
        // console.log(resEnc.data)
        const resCre = await axios.get('/api/encounter_creatures')
        
        this.setState({adventure: resAdv.data, 
            chapters: resChap.data, 
            encounters: resEnc.data, 
            creatures: resCre.data,
            stateNotLoaded: false})

    }
    handleMonsterOpen =  (creature) => {
        this.simpleDialog.show()
        this.setState({ isDialogOpen: true, creature: creature})
    }
    handleMonsterClose = () => {
        this.setState({isDialogOpen: false})
    }

    render(){
        const adventure = this.state.adventure
        return(
    
            
            this.state.stateNotLoaded ? <div></div> :
            <AdvPageContainer>

                <AdvView>
                    <AdventureTab adventure={this.state.adventure}/>
                    <h2>Chapters</h2>
                    {this.state.chapters.map((chapter)=>{ 
                        const encounter = this.state.encounters.filter(encounter =>
                                encounter.chapter_id === chapter.id
                        )
                        console.log(encounter)
    

                        
                        return(
                        <ChaptersTab chapter={chapter} 
                        encounters={encounter} 
                        creatures={this.state.creatures}
                        handleMonsterOpen={this.handleMonsterOpen}
                        handleMonsterClose={this.handleMonsterClose}/>
                        
                        )
                        
                    })}

                </AdvView>
                <MapView />
                {/* {this.state.isDialogOpen ?
                <Draggable>
                <SkyLight
                isVisible=
                title={this.state.creature.name}>
                <CreatureList creature={this.state.creature}/> 
                </SkyLight>
            </Draggable>
                    : null} */}

            </AdvPageContainer>
        )
    }
}

export default Adventure