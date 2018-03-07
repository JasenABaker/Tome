import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { SkyLightStateless } from 'react-skylight'
import Draggable from 'react-draggable';
import { Collapse } from 'react-collapse'
import { AdvPageContainer, AdvView, MapView, AdvHeader, AdvPageContainerTwo, HeadingContainer} from './styled components/Containers'
import AdventureTab from './AdventureTab'
import ChaptersTab from './ChaptersTab'
import EncountersTab from './EncountersTab'
import CreatureList from './CreatureList'
import { Dragon, Rules, Spells, Monster, Knight, Castle } from './styled components/Svg'
import { NavBar, NavButtons, NavSpell, NavMon, NavAdv, NavEdit } from './styled components/Header'
import {HeaderTab, AdvTab} from './styled components/Tabs'




class Adventure extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        adventure: {},
        chapters: [],
        chapter: {},
        encounters: [],
        encounterPass:[],
        creatures: [],
        creature: {},
        stateNotLoaded: true,
        isDialogOpen: false,
        isChapterSet: false,
        isOpened: true,
        hasEncounters: false,
        isOpenedChap: true,

    }
    async componentWillMount() {
        const resAdv = await axios.get(`/api/adventures/${this.props.match.params.id}`)
        // console.log(resAdv.data)
        const resChap = await axios.get(`/api/adventures/${this.props.match.params.id}/chapters`)
        console.log(resChap.data)
        const resEnc = await axios.get('/api/encounter')
        // console.log(resEnc.data)
        const resCre = await axios.get('/api/encounter_creatures')
        let chap = resChap.data.sort((a,b)=>{
            return a.id - b.id
        })
        let enc = resEnc.data.sort((a,b)=>{
            return a.id - b.id
        })

        this.setState({
            adventure: resAdv.data,
            chapters: chap,
            encounters: enc,
            creatures: resCre.data,
            stateNotLoaded: false
        })

    }
    handleChapterOpen = () =>{
        this.setState({isOpenedChap: !this.state.isOpenedChap})
    }

    handleMonsterOpen = (creature) => {
        this.simpleDialog.show()
        this.setState({ isDialogOpen: true, creature: creature })
    }
    handleMonsterClose = () => {
        this.setState({ isDialogOpen: false })
    }

    setChapter = (chapter) =>{
        this.handleEncounter(chapter)
        this.setState({chapter: chapter, isChapterSet: true})
    }
    handleOpen = () => {
        this.setState({ isOpened: !this.state.isOpened })
    }
    handleEncounter = (chapter) => {
        let enc = this.state.encounters.filter((enc)=>{
        return enc.chapter_id === chapter.id
            
        })
        
        if(enc !==[]){
            this.setState({encounterPass: enc, hasEncounters: true})
        }else {
            this.setState({hasEncounters: false})
        }

    }

    render() {
        const adventure = this.state.adventure
        let enc = null
        
        
        return (
            this.state.stateNotLoaded ? <div></div> :
                <AdvPageContainerTwo>
                    <AdvHeader>
                        <h1>{this.state.adventure.title}</h1>
                        <NavBar>
                            <NavButtons>
                                <Rules />
                                <p>rules</p>
                            </NavButtons>
                            <NavSpell>
                                <Spells />
                                <p>spells</p>
                            </NavSpell>
                            <NavMon>
                                <Monster />
                                <p>monsters</p>
                            </NavMon>
                            <Link to={`/adventures`} style={{ textDecoration: 'none', color: 'inherit' }}> <NavAdv>
                                <Knight />
                                <p>adventures</p>
                            </NavAdv></Link>
                            <Link to={`/adventures/${this.state.adventure.id}/edit`} style={{ textDecoration: 'none', color: 'inherit' }}><NavEdit>
                                <Castle />
                                <p>Edit</p>
                            </NavEdit></Link>
                        </NavBar>
                    </AdvHeader>
                    <AdvPageContainer>
                        <AdvView>
                        <AdvTab onClick={this.handleOpen}>
                            Adventure
                        </AdvTab>
                        <Collapse isOpened={this.state.isOpened} hasNestedCollapse={true}>
                            <AdventureTab adventure={this.state.adventure} />
                        </Collapse>
                        
                            <HeadingContainer>
                            {this.state.chapters.map((chapter)=>{
                                return(
                        
                                <HeaderTab onClick={()=>this.setChapter(chapter)}>{chapter.title}</HeaderTab>
            
                                )
                            })}
                            </HeadingContainer>
                            {this.state.isChapterSet ? <AdvTab onClick={this.handleChapterOpen}>{this.state.chapter.title}</AdvTab> :
                            null }
                            {this.state.isChapterSet ? 
                            
                            <Collapse isOpened={this.state.isOpenedChap} hasNestedCollapse={true}>
                                    
                                    <ChaptersTab chapter={this.state.chapter}
                                        encounters={this.state.encounters}
                                        creatures={this.state.creatures}
                                        handleMonsterOpen={this.handleMonsterOpen}
                                        handleMonsterClose={this.handleMonsterClose} />
                                        
                            </Collapse> : null}
                            {this.state.hasEncounters ? 
                            
                            this.state.encounterPass.map((enc) => {
                                return (
                                    <EncountersTab encounter={enc}
                                        creatures={this.state.creatures}
                                        handleMonsterOpen={this.props.handleMonsterOpen}
                                        handleMonsterClose={this.props.handleMonsterClose} />
                                )
                                }) : null }
        
                        
                        
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
                </AdvPageContainerTwo>
        )
    }
}

export default Adventure