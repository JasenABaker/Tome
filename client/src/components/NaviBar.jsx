import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Dragon, Rules, Spells, Monster, Knight, Castle, New, Dice, Edit, Turn } from './styled components/Svg'
import { NavBar } from './styled components/Header'
import { ToolButton, DiceButton, HomeButton, Overlay, NewButton, EditAdvButton, AdvButton, RulesButton, SpellButton, MonstButton } from './styled components/Buttons'
import TurnTracker from './TurnTracker';


class NaviBar extends Component {
    state = {
        adventureSet: false,
        adventure: {}

    }
    componentWillMount() {
        if (this.props.adventure) {
            this.setState({ adventure: this.props.adventure, adventureSet: true })
        }
    }


    render() {
        return (
            <NavBar>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <HomeButton>
                    <Castle />
                    <Overlay>
                        <p>Home</p>
                    </Overlay>
                </HomeButton>
                </Link>
                <Link to={`/new`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <NewButton>
                    <New />
                    <Overlay>
                        <p>New</p>
                    </Overlay>
                </NewButton>
                </Link>
                {this.state.adventureSet ? <div>
                    <ToolButton onClick={this.props.tracker}>
                        <Turn />
                        <Overlay>
                            <p>Turn Tracker</p>
                        </Overlay>
                    </ToolButton>
                    <DiceButton onClick={this.props.rollerOpen}>
                        <Dice />
                        <Overlay >
                            <p>Dice Roller</p>
                        </Overlay>
                    </DiceButton>
                    <MonstButton onClick={this.props.searchMonsterOpen}>
                        <Monster />
                        <Overlay>
                            <p>Creatures</p>
                        </Overlay>
                    </MonstButton>
                    <SpellButton onClick={this.props.handleMagicSearchOpen}>
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
                    <Link to={`/adventures/${this.state.adventure.id}/edit`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <EditAdvButton>
                        <Edit />
                        <Overlay>
                            <p>Edit</p>
                        </Overlay>
                    </EditAdvButton>
                    </Link>
                    <Link to={`/adventures`} style={{ textDecoration: 'none', color: 'inherit' }}><AdvButton>
                        <Knight />
                        <Overlay>
                            <p>Adventures</p>
                        </Overlay>
                    </AdvButton>
                    </Link>
                </div> :
                    null
                }

            </NavBar>
        )
    }
}

export default NaviBar