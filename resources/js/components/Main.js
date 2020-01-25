import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import Home from './Home'

function Main() {

  return (
    <div>
      <Nav user={{ guest: false, name: 'Deyan' }} />
      <Home />
    </div>
  )
}

export default Main

if (document.getElementById('root')) {
  ReactDOM.render(<Main />, document.getElementById('root'))
}