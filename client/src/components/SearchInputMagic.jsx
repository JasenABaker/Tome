import React, { Component } from 'react'
import axios from 'axios'
import SpellList from './SpellList'
import styled from 'styled-components'


const Search = styled.div`
    height: 100%;
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Container = styled.div`
    height: 40vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`


class SearchInputMagic extends Component {
        state = {
            search: "",
            spell: {},
            isSpellFound: false,
            falseMessage: ""
        }
        handleSearchInput = (event) => {
        let search = this.state.search
        search = event.target.value
        this.setState({ search })
        }
        handleSearchSubmit = async (event) => {
        event.preventDefault()
        const search = this.state.search
        const newSearc = search.replace(/\b[a-z]/g, (f) => { return f.toUpperCase(); })
        const some = newSearc.split(" ").join("+")
        const resSearch = await axios.get(`http://www.dnd5eapi.co/api/spells/?name=${some}`)
        if ((resSearch.data.count !== 0)) {
            const resSpell = await axios.get(`${resSearch.data.results[0].url}`)

            this.setState({ spell: resSpell.data, isSpellFound: true })


        } else {
            const spell = "Can't find Spell. Be more specific"
            this.setState({ isSpellFound: false, falseMessage: spell })
        }

    }
    render() {
        return (
            <Search>
            <form onSubmit={this.handleSearchSubmit}>
                <input type="text" placeholder="search"  onChange={this.handleSearchInput}/>
                <button type="submit">Find</button>
            </form>
            <Container>
            {this.state.isSpellFound ? 
            <SpellList spell={this.state.spell}/> : <p>{this.state.falseMessage}</p> }
            </Container>
            </Search>

        )
    }
}

export default SearchInputMagic