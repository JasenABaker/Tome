import React, { Component } from 'react'
import styled from 'styled-components'



const TrackContainer = styled.div`
    height: 50vh;
    width: 15vw;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: #FAFAF4;
    overflow: scroll;
`

const Player = styled.div`
    height: 30px;
    width: 15vw;
    background-color: white;
    display: flex;
    border-bottom: 1px solid #727D82;
`

const PlayerName = styled.div`
    height: 100%;
    width: 50%;
    overflow: hidden;

`
const AddPlayerButton = styled.button`
    height: 30px;
    width: 40px;
    color: white;
    background-color: #00A6ED;
    text-align: center;
    font-size: .6em;
`
const PlayerForm = styled.form`
    height: 10%;
    width: 100%;
    display: flex;
`
const PlayerInput = styled.input`
    height: 95%;
    width: 70%;
    font-size: 1em;
`

const PlayerSubmit = PlayerInput.extend`
    width: 30%;
    color: white;
    font-size: 1em;
    font-weight: 900;
    background-color: #FFBA08;
    text-align: center;
`

const IntDiv = styled.div`
    height: 80%;
    width: 20%;
    border: 1px solid black;
    background-color: #FFBA08;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const IntInput = styled.input`
    height: 70%;
    width: 15%;
    font-size: 1em;
`
const PlayerContainer = styled.div`
    height: 40vh;
    width: 15vw;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`
const ButtonContainer = styled.div`
    height: 10%;
    width: 90%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

`
const TrackerBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid grey;
`
const SortButton = AddPlayerButton.extend`
    background-color: #FF01FB;

`
const NexTurnButton = AddPlayerButton.extend`
    background-color: #314CB6;

`
const RemovePlayer = AddPlayerButton.extend`
    height: 80%;
    width: 15%;
    font-weight: 900;
    background-color:#D00000;
    display: flex;
    justify-content: center;
    align-items: center;
   
`


class TurnTracker extends Component {
    state = {
        players: [],
        player: {},
        showPlayerForm: false,
        isPlayerSet: false,
        showIntForm: false
    }
    showPlayerForm = () => {
        this.setState({ showPlayerForm: !this.state.showPlayerForm })
    }
    handlePlayerInput = (e) => {
        const att = e.target.name
        const val = e.target.value
        const player = { ...this.state.player }
        player[att] = val
        player.int = 0
        this.setState({ player })
    }
    handleIntInput = (e, index) => {
        const att = e.target.name
        const val = e.target.value
        const players = [...this.state.players]
        const player = players[index]
        player[att] = val
        this.setState({ players })
    }


    playerSubmit = (e) => {
        e.preventDefault()
        const players = this.state.players
        players.push(this.state.player)
        e.target.reset()
        this.setState({ players, isPlayerSet: true })
    }
    intChange = (player) => {
        this.setState({ showIntForm: !this.state.showIntForm })
    }

    sortByInt = () => {
        const playersSort = this.state.players.sort((a,b)=>{
            return a.int - b.int
        })
        const players =  playersSort.reverse()
        this.setState({players})
    }
    nextTurn = () => {
        const players = this.state.players
        const playerShift = players.shift()
        players.push(playerShift)
        this.setState({players})
    }

    removeFromOrder = (index) => {
        const players = [...this.state.players]
        players.splice(index, 1)
        this.setState({players})
    }



    render() {
        let players = null
        if (this.state.players) {
            players = <PlayerContainer>
                {this.state.players.map((player, index) => {
                    return (

                        <Player><RemovePlayer onClick={()=>this.removeFromOrder(index)}>X</RemovePlayer><PlayerName>{player.name}</PlayerName> <IntDiv onClick={this.intChange}>{player.int}</IntDiv>{this.state.showIntForm ?
                            <IntInput type="number" name="int" value={player.int} onChange={(event) => this.handleIntInput(event, index)} /> : null}
                        </Player>
                    )
                })}
            </PlayerContainer>
        } else {
            players = null
        }
        return (
            <TrackContainer>

                {players}

                <TrackerBottom>
                    <ButtonContainer>
                        <AddPlayerButton onClick={this.showPlayerForm}>
                            Add Player
                </AddPlayerButton>
                <SortButton onClick={this.sortByInt}>
                    Turn Order
                </SortButton>
                <NexTurnButton onClick={this.nextTurn}>
                    Next Turn
                </NexTurnButton>
                    </ButtonContainer>
                    {this.state.showPlayerForm ?
                        <PlayerForm onSubmit={this.playerSubmit}>
                            <PlayerInput type="text" name="name" placeholder="Add Player" onChange={this.handlePlayerInput} />
                            <PlayerSubmit type="submit" value="+" />

                        </PlayerForm> : null}
                </TrackerBottom>
            </TrackContainer>
        )
    }
}

export default TurnTracker