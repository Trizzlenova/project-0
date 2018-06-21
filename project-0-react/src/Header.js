import React, {Component} from 'react'

class Header extends Component {
  render () {
    return (
    <header>
      <i className="fas fa-bars"></i>
      <h1>TROY SWAYZEE</h1>
      <div className = 'headerImage'>
        <img src='images/seattleheader.jpeg'/>
      </div>
    </header>
    )
  }
}

export default Header
