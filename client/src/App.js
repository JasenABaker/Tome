import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import axios from 'axios'
import {Header, HeaderDiv, NavBar, NavButtons} from './components/styled components/Header'
import { PageContainer } from './components/styled components/Containers'
import Home from './components/Home'
import AdventureSelect from './components/AdventureSelect'
import Adventure from './components/Adventure'
import NewPage from './components/NewPage'
import EditPage from './components/EditPage'
import {Dragon, Rules, Spells, Monster, Knight, Castle} from './components/styled components/Svg'


class App extends Component {
    state = {
      adventures: [],

    }
    async componentWillMount () {
      const res = await axios.get('/api/adventures')
      this.setState({adventures: res.data})
    }
    addNewAdv = (newAdv) =>{
      const adventures = [...this.state.adventures]
      adventures.push(newAdv)
      this.componentWillMount()
      this.setState({adventures})
    }
    removeAdv = (adv) => {
      const AdvToRemove = this.state.adventures.indexOf(adv)
      const adventures = [...this.state.adventures]
      adventures.splice(AdvToRemove, 1)
      this.componentWillMount()
      this.setState({ adventures })
    }

  render() {
    const AdSelect = () =>{
      return(
        <AdventureSelect adventures={this.state.adventures} removeAdv={this.removeAdv}/>
      )
    }
    const NewPageComp = () => {
      return (
        <NewPage addNewAdv={this.addNewAdv}/>
      )
    }

    const EditPageComp = (props) =>{
      return (
        <EditPage {...props} />
      )
    }

    
    return (
  
        
        <PageContainer>
          <Header>
          <HeaderDiv href="/"><Dragon /><h1>Tome</h1></HeaderDiv>
          </Header>
          <Router>
            <div>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/adventures' render={AdSelect}/>
                <Route exact path='/adventures/:id' component={Adventure}/>
                <Route exact path='/adventures/:id/edit' render={EditPageComp}/>
                <Route exact path='/new' render={NewPageComp} />
                </Switch>
        </div>
        </Router>
      </PageContainer>
  
          );
        }
      }
      
      export default App;
