import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Dragon, Rules, Spells, Monster, Knight, Castle, New, Dice, Edit } from './styled components/Svg'
import { NavBar} from './styled components/Header'
import {ToolButton,DiceButton, HomeButton, Overlay, OverlayBlk, NewButton, EditAdvButton, AdvButton, RulesButton, SpellButton} from './styled components/Buttons'


class NaviBar extends Component {
    state = {
        adventureSet: false,
        adventure: {}

    }
    componentWillMount(){
        if(this.props.adventure){
        this.setState({adventure: this.props.adventure, adventureSet: true})
        }
    }


    render() {
        return (
            <NavBar>
                <HomeButton>
                    <Castle />
                    <Overlay>
                    <p>Home</p>
                    </Overlay>
                </HomeButton>
                <NewButton>
                    <New />
                    <Overlay>
                        <p>New</p>
                    </Overlay>
                </NewButton>
                {this.state.adventureSet ? <div>
                    <SpellButton>
                        <Spells />
                        <Overlay>
                            <p>Spells</p>
                        </Overlay>
                    </SpellButton>
                    <RulesButton>
                        <Rules />
                        <Overlay>
                            <p>Rules</p>
                        </Overlay>
                    </RulesButton>
                    <EditAdvButton>
                <Edit />
                <OverlayBlk>
                    <p>Edit</p>
                </OverlayBlk>
            </EditAdvButton> 
                <AdvButton>
                <Knight />
                <Overlay>
                <p>Adventures</p>
                </Overlay>
            </AdvButton>

            </div> :
            null
                }
                
            </NavBar>
        )
    }
}

export default NaviBar