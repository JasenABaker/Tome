import React, { Component } from 'react'
import styled from 'styled-components'


const RollerConatiner = styled.div`
    height: 30vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const DiceContainer = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
`
const Dice = styled.div`
    height: 50px;
    width: 50px;
    background-color: #0D2C54;
    color: white;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;

    :hover {
        background: linear-gradient(to bottom, rgba(101,120,146,1) 0%,rgba(13,44,84,1) 87%);
        box-shadow: 0 5px 15px rgba(13,44,84 .4); 
    }
    :active {
        background: radial-gradient(ellipse at center, rgba(101,120,146,1) 0%,rgba(13,44,84,1) 100%);
    }
`
const InputDiv = styled.form`
    height: 50px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    font-size: 1em;
`
const NumInput = styled.input`
    width: 30px;
    height: 30px;
    font-size: 1em;
`
const RolledDiceDiv = styled.div`
    width: 90%;
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

let dice = null
let total = null

class DiceRoller extends Component {
    state = {
        howManyForm: false,
        numOfDice: 1,
        rolledDice: [],
        total: 0,
        dieType: null,
        showDiceRolled: false,
        totalShow: false
    }

    handleNumOfDiceChange = (event) => {
        if (event.target.value >= 1) {
            this.setState({ numOfDice: event.target.value })
        } else if (event.target.value > 10){
            alert("Can't roll more than 10 dice!")
        } else {
            alert('Must roll at least one!')
        }
    }
    rollAndAddDice = (numDie, dieType) => {
        const die = () => {
            const num = Math.floor(Math.random() * dieType + 1)
            return num
        }
        const array = []
        for (let i = 0; i < numDie; i++) {
            const diceRoll = die()
            console.log(diceRoll)
            array.push(diceRoll)
        }
        const add = array.reduce((a, b) => {
            return a + b
        })
        total = <h1>total: {add}</h1> 
        this.setState({total: add, rolledDice: array})
    }
    rollDTwenty = ()=> {
        const num = Math.floor(Math.random() * 20 + 1)
        total = <h1> Rolled: {num} </h1>
        this.setState({total: num, totalShow: true, showDiceRolled: false, howManyForm: false})
    }
    rollPercent = () => {
        const num = (Math.floor(Math.random() * (11-1)+1)) * 10
        total = <h1> Rolled: {num}% </h1>
            this.setState({total: num, totalShow: true, showDiceRolled: false, howManyForm: false})
    }

    resetRolls = () => {
        if(this.state.howManyForm){
        this.setState({ showDiceRolled: false, totalShow: false, total: 0, rolledDice: [], numOfDice: 1})
        } else {
            this.setState({showDiceRolled: false, totalShow: false, total: 0, rolledDice: [], numOfDice: 1})
        }
    }
    handleD4 = () => {
        this.resetRolls()
        dice = "d4"
        if(this.state.dieType === 4 ){
            this.setState({howManyForm: false, dieType: null})
        }else {
        this.setState({howManyForm: true, dieType: 4 })
        }
    }
    handleD6 = () => {
        this.resetRolls()
        dice = "d6"
        if(this.state.dieType === 6 ){
            this.setState({howManyForm: false, dieType: null})
        }else {
        this.setState({howManyForm: true, dieType: 6 })
        }
    }
    handleD8 = () => {
        this.resetRolls()
        dice = "d8"
        if(this.state.dieType === 8 ){
            this.setState({howManyForm: false, dieType: null})
        }else {
        this.setState({ howManyForm: true,dieType: 8 })
        }
    }
    handleD10 = () => {
        this.resetRolls()
        dice = "d10"
        if(this.state.dieType === 10 ){
            this.setState({howManyForm: false, dieType: null})
        }else {
        this.setState({ howManyForm: true, dieType: 10 })
        }
    }
    handleD12 = () => {
        this.resetRolls()
        dice = "d12"
        if(this.state.dieType === 12 ){
            this.setState({howManyForm: false, dieType: null})
        }else {
        this.setState({howManyForm: true, dieType: 12 })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
            this.rollAndAddDice(this.state.numOfDice, this.state.dieType)
        event.target.reset()
            this.setState({totalShow: true, showDiceRolled: true }) 
        
    }

    
    render() {
        return (
            <RollerConatiner>
                <DiceContainer>
                    <Dice onClick={this.handleD4}>D4</Dice>
                    <Dice onClick={this.handleD6}>D6</Dice>
                    <Dice onClick={this.handleD8}>D8</Dice>
                    <Dice onClick={this.handleD10}>D10</Dice>
                    <Dice onClick={this.handleD12}>D12</Dice>
                    <Dice onClick={this.rollPercent}>D00</Dice>
                    <Dice onClick={this.rollDTwenty}>D20</Dice>
                </DiceContainer>
                {this.state.howManyForm ? <InputDiv onSubmit={this.handleSubmit}>
                    <h3>How many {dice}'s to roll?</h3>
                    <NumInput type="number" value={this.state.numOfDice} onChange={this.handleNumOfDiceChange} />
                </InputDiv> : null}
                {this.state.showDiceRolled ? <RolledDiceDiv>
                    <h4> Results Rolled: </h4>
                    {this.state.rolledDice.map((dice)=>{
                        return(
                            <div>
                            {dice}
                            </div>
                        )
                    })}
                    </RolledDiceDiv> : null}
                {this.state.totalShow ? total : null}
            </RollerConatiner>
        )
    }
}

export default DiceRoller