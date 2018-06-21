import React, {Component} from 'react'

class About extends Component {
  render () {
    return (
    <div>
      <div id="aboutNav"></div>
      <h2>ABOUT</h2>
      <div id="about" className='fader'>
        <div id="images">
          <img id="mug" src="images/ugMug.jpg"/>
          <div className="fadeScroll">
            <i className="fas fa-code"></i>
            <i className="fas fa-football-ball"></i>
            <i className="fas fa-rocket"></i>
            <i className="fas fa-gamepad"></i>
            <i className="fas fa-keyboard"></i>
            <i className="fas fa-music"></i>
            <i className="fas fa-beer"></i>
            <i className="fas fa-tv"></i>
            <i className="fas fa-plane"></i>
          </div>
        </div>
        <i className="fas fa-chess-board"></i>
        <p>
          An outgoing Bay Area web developer who loves breaking down complex problems and turning them into visual art. My experience consists of deep communication with peers and being able to be level-headed in high stressful situations, converting the results into something the audience can enjoy.
        </p>
      </div>
    </div>
    )
  }
}

export default About
