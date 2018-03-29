import React, { Component } from 'react'
import axios from 'axios'
import CreatureList from './CreatureList'
import styled from 'styled-components'


const Search = styled.div`
    height: 100%;
    width: 100%;
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


class SearchInput extends Component {
        state = {
            search: "",
            creature: {},
            isCreatureFound: false,
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
        const resSearch = await axios.get(`http://www.dnd5eapi.co/api/monsters/?name=${some}`)
        if ((resSearch.data.count !== 0)) {
            const resCrea = await axios.get(`${resSearch.data.results[0].url}`)

            this.setState({ creature: resCrea.data, isCreatureFound: true })


        } else {
            const creature = "Can't find creature. Be more specific, i.e. adult blue dragon instead of adult dragon."
            this.setState({ isCreatureFound: false, falseMessage: creature })
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
            {this.state.isCreatureFound ? 
            <CreatureList creature={this.state.creature}/> : <p>{this.state.falseMessage}</p> }
            </Container>
            </Search>

        )
    }
}

export default SearchInput