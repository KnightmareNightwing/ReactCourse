import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import User from './User';
import UserForm from './UserForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Book section 9.2: this proves Firebase is added correctly.
// Open the browser console (F12): you should see the firebase object printed.
class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/edit/:id" component={UserForm} />
              <Route path="/add" component={UserForm} />
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}
export default App;

class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}
