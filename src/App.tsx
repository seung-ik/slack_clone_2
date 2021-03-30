import React from 'react';
import {Switch , Route , Redirect} from 'react-router-dom'
import Login from "@pages/Login";
import Signup from "@pages/Signup";



function App() {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" / >
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
    </Switch>
  );
}

export default App;
