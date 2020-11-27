import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Mounting from './Mounting';
import UpdateMounting from './UpdateMounting';
import UnMounting from './UnMounting';
import LifeCycle from './LifeCycle';
import Header from './Header';


function App() {
  return (
    <div className="App">
      <div className="card text-center">
        <div className="card-header">
          <h1>Component Life Cycle </h1>
        </div>
        <nav aria-label="breadcrumb" className="header">
          <BrowserRouter>
            <Header />
            <Switch>
              <div class="jumbotron jumbotron-fluid">
                <span className="container" id="btn">
                  <Route exact path='/' component={LifeCycle} />
                  <Route path='/Mounting' component={Mounting} />
                  <Route path='/UpdateMounting' component={UpdateMounting} />
                  <Route path='/UnMounting' component={UnMounting} />
                </span>
              </div>
            </Switch>
          </BrowserRouter>

        </nav>

      </div>


    </div>
  );
}

export default App;
