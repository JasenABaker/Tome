import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import axios from 'axios'
import logo from './logo.svg';
import Header from './components/styled components/Header'
import { PageContainer } from './components/styled components/Containers'
import Home from './components/Home'
import AdventureSelect from './components/AdventureSelect'
import Adventure from './components/Adventure'
import NewPage from './components/NewPage'


class App extends Component {
    state = {
      adventures: []
    }
    async componentWillMount () {
      const res = await axios.get('/api/adventures')
      this.setState({adventures: res.data})
    }

  render() {
    const AdSelect = () =>{
      return(
        <AdventureSelect adventures={this.state.adventures}/>
      )
    }
    return (
  
        
        <PageContainer>
          <Header />
          <Router>
            <div>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/adventures' render={AdSelect}/>
                <Route exact path='/adventures/:id' component={Adventure}/>
                <Route exact path='/new' component={NewPage} />
                </Switch>
        </div>
        </Router>
      </PageContainer>
  
          );
        }
      }
      
      export default App;
