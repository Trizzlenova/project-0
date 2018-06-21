import React, {Component} from 'react'

class Contact extends Component {
  render () {
    return (
    <div>
      <div id="contactNav"></div>
      <h2>let's meet up!</h2>
      <div id="info">
        <div id="contact" className="box">
          <input type="text" placeholder="First Name" id="first"/>
          <input type="text" placeholder="Last Name" id="last"/>
          <input type="email" placeholder="Email" id="email"/>
          <textarea type="text" placeholder="Comment" id="text"></textarea>
          <button type="submit" value="submit" id="submit" row="30">SUBMIT</button>
        </div>
        <div id="secondHalf">
          <i className="fas fa-coffee"></i>
        </div>
      </div>
    </div>
    )
  }
}

export default Contact
