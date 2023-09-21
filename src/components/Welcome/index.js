// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribed: false}

  changeToSubscribed = () => {
    this.setState(prevState => ({
      subscribed: !prevState.subscribed,
    }))
  }

  render() {
    const {subscribed} = this.state
    const buttonText = subscribed ? 'Subscribed' : 'Subscribe'

    return (
      <div className="bgContainer">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <div>
          <button
            className="button"
            type="button"
            onClick={this.changeToSubscribed}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
