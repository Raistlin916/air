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
          <Shake className="oxygen-bottle anm-element" delay={700} delayBetweenRound={1500} />
          <div className="oxygen-pipe anm-element" />
        </div>
        <div className="section-start-haze anm-element" />
      </div>
    )
  }
}
