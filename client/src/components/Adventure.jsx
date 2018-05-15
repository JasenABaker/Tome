import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Collapse } from 'react-collapse'
import Dialog from 'react-dialog'
import { MapInteractionCSS } from 'react-map-interaction'
import Dropdown, {MenuItem} from './Dropdown'
import { AdvPageContainer, AdvView, MapView, AdvHeader, AdvPageContainerTwo, HeadingContainer, ToolBar } from './styled components/Containers'
import {MonsterContainer} from './styled components/Forms'
import AdventureTab from './AdventureTab'
import ChaptersTab from './ChaptersTab'
import EncountersTab from './EncountersTab'
import CreatureList from './CreatureList'
import { HeaderTab, AdvTab } from './styled components/Tabs'
import SearchInput from './SearchInput'
import {ToolButton, DiceButton} from './styled components/Buttons'
import TurnTracker from './TurnTracker'
import {Dice} from './styled components/Svg'
import DiceRoller from './DiceRoller'
import SearchInputMagic from './SearchInputMagic'
import NaviBar from './NaviBar'

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
        isRollerOpen: false,
        isMagicSearchOpen: false

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
    handleMagicSearchOpen = () => {
        this.setState({isMagicSearchOpen: !this.state.isMagicSearchOpen})
    }
    handleMagicSearchClose = () => {
        this.setState({isMagicSearchOpen: false})
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
    handleEncounter = (chapter) => {
        let enc = this.state.encounters.filter((enc) => {
            return enc.chapter_id === chapter.id

        })

        if (enc.length > 0) {
            this.setState({ encounterPass: enc, hasEncounters: true })
        } else {
            this.setState({ hasEncounters: false })
        }

    }

    setChapter = (chapter) => {
        if(chapter.mapUrl){
        this.handleEncounter(chapter)
        this.setState({ chapter: chapter, isChapterSet: true, map: chapter.mapUrl, isEncSet: false})
        } else {
            this.handleEncounter(chapter)
            this.setState({ chapter: chapter, isChapterSet: true, isEncSet: false})
        }
    }
    handleOpen = () => {
        if(!(this.state.isOpened)){
            this.setState({isOpened: !this.state.isOpened, map: this.state.adventure.mapUrl})
        } else {
        this.setState({ isOpened: !this.state.isOpened })
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
                    
                        <NaviBar adventure={this.state.adventure} 
                                tracker={this.tracker}
                                rollerOpen={this.rollerOpen}
                        />
                
                    <AdvPageContainer>
                        <AdvView>
                            <AdvTab onClick={this.handleOpen}>
                                Adventure
                        </AdvTab>
                            <Collapse isOpened={this.state.isOpened} hasNestedCollapse={true}>
                                <AdventureTab adventure={this.state.adventure} />
                            </Collapse>
                                <Dropdown>
                                    <Dropdown.Toggle title="Select A Chapter" />
                                        <Dropdown.MenuWrapper>
                                            <Dropdown.Menu>
                                {this.state.chapters.map((chapter) => {
                                    return (

                                        <MenuItem onSelect={() =>this.setChapter(chapter)}>{chapter.title}</MenuItem>

                                    )
                                })} 
                                    </Dropdown.Menu>
                                </Dropdown.MenuWrapper>
                                </Dropdown>
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
                                <Dropdown>
                                    <Dropdown.Toggle title="Select An Encounter" />
                                        <Dropdown.MenuWrapper>
                                            <Dropdown.Menu>
                                    {this.state.encounterPass.map((enc) => {
                                        return (
                                            <MenuItem onClick={() => this.selectedEnc(enc)}>{enc.map_location_number}. {enc.location}</MenuItem>
                                        )

                                    })}
                                        </Dropdown.Menu>
                                    </Dropdown.MenuWrapper>
                                </Dropdown> : null}
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
                            <MapInteractionCSS>
                            <img src={this.state.map} alt={this.state.adventure.title}/>
                            </MapInteractionCSS>
    
                        </MapView>
                        


                    </AdvPageContainer>
                    {this.state.isMagicSearchOpen &&
                    <Dialog
                        title="Spells"
                        height="500"
                        width="300"
                        isDraggable="true"
                        onClose={this.handleMagicSearchClose}>
                        <SearchInputMagic />
                    </Dialog>}
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