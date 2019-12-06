import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'

function Main () {
  return (
    <h1>
      Main
    </h1>
  )
}

function Contact () {
  return (
    <h1>
      Contact
    </h1>
  )
}

function App () {
  return (
    <div className="App">
      <ul>
        <li><a href="/">Main</a></li>
        <li><a href="/contact">Concat</a></li>
      </ul>
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  )
}

export default App
