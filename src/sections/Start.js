import React, { Component } from 'react'
import './styles/start.scss'
import Shake from '../animations/shake'


export default class Start extends Component {

  componentWillMount() {
    // this.props.setDeaf(true)
  }

  render() {
    return (
      <div className="section-start">
        <Shake className="oxygen-bomb" delay={500} />
      </div>
    )
  }
}
