import React, { Component } from 'react'
import './styles/start.scss'
import Shake from '../animations/Shake'


export default class Start extends Component {

  componentWillMount() {
    // this.props.setDeaf(true)
  }

  render() {
    return (
      <div>
        <div className="section-start-bg anm-element">
          <Shake className="oxygen-bomb anm-element" delay={1500} delayBetweenRound={3000} />
        </div>
        <div className="section-start-haze anm-element" />
      </div>
    )
  }
}
