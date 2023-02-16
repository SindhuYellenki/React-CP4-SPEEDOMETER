/* eslint-disable prettier/prettier */
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevstate => ({count: prevstate.count + 10}))
    }
  }

  decelerate = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevstate => ({count: prevstate.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img src="" alt="speedometer" className="picture_container" />
        <h1 className="para1">
          Speed is <span className="">{count}</span> mph
        </h1>
        <p className="para2">Min Limit is 0mph,Max Limit is 200mph</p>
        <div className="">
          <button
            className="Accelerate"
            type="button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            className="Apply_Brake"
            type="button"
            onClick={this.decelerate}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
