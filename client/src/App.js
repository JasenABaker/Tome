import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import axios from 'axios'
import logo from './logo.svg';
import Header from './components/styled components/Header'
import { PageContainer } from './components/styled components/Containers'
import Home from './components/Home'
import AdventureSelect from './components/AdventureSelect'
import Adventure from './components/Adventure'


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
      <div>
        <Header />
        <PageContainer>
          <Router>
            <div>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/adventures' render={AdSelect}/>
                <Route exact path='/adventures/:id' component={Adventure}/>
                </Switch>
         </div>
        </Router>
       </PageContainer>
      </div>
          );
        }
      }
      
      export default App;
