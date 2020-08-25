import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'

class App extends React.Component {



  render(){
    return (
      <div>
      {/* <Navbar/> */}
        <Switch>
          <Route path='/' component={Home} exact/>
        </Switch>
    </div>
  );
}
}

export default App;
