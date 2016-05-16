import React, { Component } from 'react'
import './styles/start.scss'
import Shake from '../animations/Shake'


export default class Start extends Component {

  componentWillMount() {
    // this.props.setDeaf(true)
  }

  render() {
    return (
      <div className="section-start">
        <div className="section-start-bg anm-element">
          <Shake className="oxygen-bomb anm-element" delay={1500} />
        </div>
        <div className="haze anm-element" />
      </div>
    )
  }
}
