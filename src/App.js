import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Header } from 'Header.js';
import PowerDetail from 'PowerDetail.js';
import PowersList from 'PowersList.js';
import Create from 'Create.js';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <> 
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={PowersList}/>
          <Route path='/powers/:id' component={PowerDetail}/>
          <Route path='/create' component={Create}/>
        </Switch>
      </BrowserRouter>
      </>
     );
  }
}
 
export default App;