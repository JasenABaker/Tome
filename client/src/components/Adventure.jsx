import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Collapse } from 'react-collapse'
import Dialog from 'react-dialog'
import { AdvPageContainer, AdvView, MapView, AdvHeader, AdvPageContainerTwo, HeadingContainer, ToolBar } from './styled components/Containers'
import {MonsterContainer} from './styled components/Forms'
import AdventureTab from './AdventureTab'
import ChaptersTab from './ChaptersTab'
import EncountersTab from './EncountersTab'
import CreatureList from './CreatureList'
import { Dragon, Rules, Spells, Monster, Knight, Castle } from './styled components/Svg'
import { NavBar, NavButtons, NavSpell, NavMon, NavAdv, NavEdit } from './styled components/Header'
import { HeaderTab, AdvTab } from './styled components/Tabs'
import SearchInput from './SearchInput'
import {ToolButton, DiceButton} from './styled components/Buttons'
import TurnTracker from './TurnTracker'
import {Dice} from './styled components/Svg'
import DiceRoller from './DiceRoller'

const cardStyle = {
    padding: "20px 0",
    height: "65vh",
    width: "30vw",
    backgroundColor: "#F9F5D9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "scroll",
}

const tracker = {
    height: "52vh",
    width: "16vw",
}


class Adventure extends Component {

    state = {
        map:"",
        adventure: {},
        chapters: [],
        chapter: {},
        encounters: [],
        encounterPass: [],
        encounter: {},
        creatures: [],
        stateNotLoaded: true,
        isDialogOpen: false,
        isChapterSet: false,
        isOpened: true,
        hasEncounters: false,
        isOpenedChap: true,
        isEncSet: false,
        isEncOpen: false,
        creature: {},
        isDialogOpen2: false,
        isMonsterSearchOpen: false,
        isRollerOpen: false

    }
    async componentWillMount() {
        const resAdv = await axios.get(`/api/adventures/${this.props.match.params.id}`)
        // console.log(resAdv.data)
        const resChap = await axios.get(`/api/adventures/${this.props.match.params.id}/chapters`)
        console.log(resChap.data)
        const resEnc = await axios.get('/api/encounter')
        // console.log(resEnc.data)
        const resCre = await axios.get('/api/encounter_creatures')
        let chap = resChap.data.sort((a, b) => {
            return a.id - b.id
        })
        let enc = resEnc.data.sort((a, b) => {
            return a.id - b.id
        })

        this.setState({
            adventure: resAdv.data,
            chapters: chap,
            encounters: enc,
            creatures: resCre.data,
            map: resAdv.data.mapUrl,
            stateNotLoaded: false
        })

    }
    handleChapterOpen = () => {
        this.setState({ isOpenedChap: !this.state.isOpenedChap })
    }

    handleMonsterOpen = (creature) => {
        // this.simpleDialog.show()
        this.setState({ isDialogOpen: true, creature: creature })
    }
    handleMonsterClose = () => {
        this.setState({ isDialogOpen: false })
    }

    setChapter = (chapter) => {
        if(chapter.mapUrl){
        this.handleEncounter(chapter)
        this.setState({ chapter: chapter, isChapterSet: true, map: chapter.mapUrl })
        } else {
            this.handleEncounter(chapter)
            this.setState({ chapter: chapter, isChapterSet: true})
        }
    }
    handleOpen = () => {
        if(!(this.state.isOpened)){
            this.setState({isOpened: !this.state.isOpened, map: this.state.adventure.mapUrl})
        } else {
        this.setState({ isOpened: !this.state.isOpened })
        }
    }
    handleEncounter = (chapter) => {
        let enc = this.state.encounters.filter((enc) => {
            return enc.chapter_id === chapter.id

        })

        if (enc !== []) {
            this.setState({ encounterPass: enc, hasEncounters: true })
        } else {
            this.setState({ hasEncounters: false })
        }

    }
    selectedEnc = (enc) => {
        this.setState({ encounter: enc, isEncSet: true })
    }
    handleEncounterOpen = () => {
        this.setState({ isEncOpen: !this.state.isEncOpen })
    }
    findCreature = (creature) => {
        this.openDialog()
        this.setState({ creature: creature })
    }
    openDialog = () => {
        this.setState({isDialogOpen: true})
    }
    searchMonsterOpen = () => {
        this.setState({isMonsterSearchOpen: !this.state.isMonsterSearchOpen})
        
    }
    searchMonsterClose = () => {
        this.setState({isMonsterSearchOpen: false})
        
    }
    tracker = () => {
        this.setState({isDialogOpen2: !this.state.isDialogOpen2})
    }
    handleTrackerClose = () => {
        this.setState({isDialogOpen2: false})
    }
    rollerOpen = () => {
        this.setState({isRollerOpen: !this.state.isRollerOpen})
    }
    rollerClose = () => {
        this.setState({isRollerOpen: false})
    }

    render() {
        const adventure = this.state.adventure
        let enc = null


        return (
            this.state.stateNotLoaded ? <div></div> :
                <AdvPageContainerTwo>
                    <div className="container">
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
                            <NavMon onClick={this.searchMonsterOpen}>
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
                        <ToolBar>
                            <ToolButton onClick={this.tracker}>
                                +
                            </ToolButton>
                            <DiceButton onClick={this.rollerOpen}>
                                <Dice />
                            </DiceButton>
                        </ToolBar>
                            <AdvTab onClick={this.handleOpen}>
                                Adventure
                        </AdvTab>
                            <Collapse isOpened={this.state.isOpened} hasNestedCollapse={true}>
                                <AdventureTab adventure={this.state.adventure} />
                            </Collapse>

                            <HeadingContainer>
                                {this.state.chapters.map((chapter) => {
                                    return (

                                        <HeaderTab onClick={() => this.setChapter(chapter)}>{chapter.title}</HeaderTab>

                                    )
                                })}
                            </HeadingContainer>
                            {this.state.isChapterSet ? <AdvTab onClick={this.handleChapterOpen}>{this.state.chapter.title}</AdvTab> :
                                null}
                            {this.state.isChapterSet ?

                                <Collapse isOpened={this.state.isOpenedChap} hasNestedCollapse={true}>

                                    <ChaptersTab chapter={this.state.chapter}
                                        encounters={this.state.encounters}
                                        creatures={this.state.creatures}
                                        handleMonsterOpen={this.handleMonsterOpen}
                                        handleMonsterClose={this.handleMonsterClose} />

                                </Collapse> : null}
                            {this.state.hasEncounters ?
                                <HeadingContainer>
                                    {this.state.encounterPass.map((enc) => {
                                        return (
                                            <HeaderTab onClick={() => this.selectedEnc(enc)}>{enc.map_location_number}. {enc.location}</HeaderTab>
                                        )

                                    })}
                                </HeadingContainer> : null}
                            {this.state.isEncSet ?
                                <AdvTab onClick={this.handleEncounterOpen}>{this.state.encounter.map_location_number}. {this.state.encounter.location}</AdvTab> :
                                null}

                            {this.state.isEncSet ?
                                <Collapse isOpened={this.state.isEncOpen} hasNestedCollapse={true}>
                                    <EncountersTab encounter={this.state.encounter}
                                        creatures={this.state.creatures}
                                        findCreature={this.findCreature} />
                                </Collapse>

                                : null}



                        </AdvView>
                        <MapView>
                
                            <img src={this.state.map} alt={this.state.adventure.title}/>
                            
    
                        </MapView>
                        


                    </AdvPageContainer>
                    {this.state.isRollerOpen &&
                    <Dialog
                        title="Dice Roller"
                        height="200"
                        width="400"
                        isDraggable="true"
                        onClose={this.rollerClose}
                        allowMinimize="true">
                        <DiceRoller />
                    </Dialog>}
                    {this.state.isDialogOpen2 &&
                    <Dialog
                        title="Turn Tacker"
                        height="400"
                        width="600"
                        isDraggable="true"
                        onClose={this.handleTrackerClose}
                        allowMinimize="true">
                        
                        <TurnTracker/>
                    </Dialog>}
                    {this.state.isMonsterSearchOpen &&
                    <Dialog
                        title="Search Monsters"
                        height="300"
                        width="200"
                        isDraggable="true"
                        onClose={this.searchMonsterClose}>
                        <SearchInput />
                    </Dialog>}
                        {this.state.isDialogOpen &&
                        <Dialog
                            title={this.state.creature.name}
                            height="100"
                            width="50"
                            isDraggable="true"
                            onClose={this.handleMonsterClose}>
                        <CreatureList creature={this.state.creature}/> 
                        </Dialog> }
                        </div>
                </AdvPageContainerTwo>
        )
    }
}

export default Adventure