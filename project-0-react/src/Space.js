import React, {Component} from 'react'
import apiKey from config.js

class Space extends Component {
  constructor(taco) {
    super(taco);
    this.state = {
      error: null,
      isLoaded: false,
      items = []
    };
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
        });
      }
    )
  }

  render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.title}>
                {item.title} {item.explanation}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
export default Space
