import React, {Component} from 'react'

class Navigation extends Component {
  render () {
    return (

    <div id="sticky">
      <nav>
        <ul>
        <li><a href="#aboutNav">ABOUT</a></li>
        <li><a href="#projectsNav">PROJECTS</a></li>
        <li><a href="#nasaNav">NASA API</a></li>
        <li><a href="#contactNav">CONTACT</a></li>
        </ul>
      </nav>
    </div>
    )
  }
}

export default Navigation
