import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="number">{mango}</span> Mangoes{' '}
            <span className="number">{banana}</span> Bananas
          </h1>
          <div className="fruits-and-images-container">
            <div className="fruit-and-its-button-container">
              <img
                className="image"
                alt="Mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button className="button" type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-and-its-button-container">
              <img
                className="image"
                alt="Banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button className="button" type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
