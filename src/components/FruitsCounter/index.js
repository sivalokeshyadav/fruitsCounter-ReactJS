import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,

    bananasCount: 0,
  }

  eatMangoes = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  eatBananas = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="bg-container">
        <div className="mini-container">
          <h1 className="heading">
            Bob ate <span>{mangoesCount}</span> mangoes
            <span>{bananasCount}</span> bananas
          </h1>

          <div className="buttons-container">
            <div className="button-mini-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
              />

              <button
                type="button"
                className="button"
                onClick={this.eatMangoes}
              >
                Eat Mango
              </button>
            </div>

            <div className="button-mini-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="bananas"
              />

              <button
                type="button"
                className="button"
                onClick={this.eatBananas}
              >
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
