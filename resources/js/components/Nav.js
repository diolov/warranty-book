import React from 'react'

function Nav(props) {

  function handleLogout(event) {
    event.preventDefault()
    document.getElementById('logout-form').submit()
  }

  function getAuthLinks() {
    if (!props.user.isAuthenticated) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {props.user.name} <span className="caret"></span>
            </a>

            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a className="dropdown-item"
                href="/logout"
                onClick={handleLogout}>
                Logout
                </a>

              <form id="logout-form" action="/logout" method="POST" style={{ display: 'none' }}>
                {/* @csrf */}
              </form>
            </div>
          </li>
        </ul>
      )
    }
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/">Warranty Book</a>
        <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left Side Of Navbar */}
          <ul className="navbar-nav mr-auto"></ul>

          {/* Right Side Of Navbar */}
          {getAuthLinks()}
        </div>
      </div>
    </nav>
  )
}

export default Nav