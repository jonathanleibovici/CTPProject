import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import MainPage  from './components/MainPage';

class App extends Component{

  constructor(props){
    super(props)
    /* this is were we can store properties number strings etc */
    this.state={
    }
  }

    render() {
     
      return (  
         <Router>
             <div className="App">
                <div className="App-header">
                  <Switch>
                    <Route path = "/login">
                         <Login userName = {this.userName}/>
                      </Route>
                      <Route path="/home">
                        <MainPage />
                      </Route>
                    </Switch>
                  </div>
               </div>
          </Router>
      );
    }
  }

export default App;
