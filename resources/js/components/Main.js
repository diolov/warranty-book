import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import Register from './Register'

const user = {
  name: 'Deyan',
  isAuthenticated: false
}

const PrivateRoute = ({ children, ...rest }) => {
  return (<Route {...rest} render={(props) => (
    user.isAuthenticated === true
      ? children
      : <Redirect to='/login' />
  )} />)
}

function Main() {

  return (
    <Router>
      <Nav user={user} />

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <PrivateRoute exact path="/">
        <Home />
      </PrivateRoute>
    </Router>
  )
}

export default Main

if (document.getElementById('root')) {
  ReactDOM.render(<Main />, document.getElementById('root'))
}