import React, {Component} from 'react'
import {render} from 'react-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    NavLink
} from 'react-router-dom'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route render={() => {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}
