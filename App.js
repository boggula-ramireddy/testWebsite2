import {Component} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import LogIn from './component/Login'
import Home from './component/Home'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
