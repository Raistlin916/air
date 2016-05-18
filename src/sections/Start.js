import React, { Component } from 'react'
import './styles/start.scss'


export default class Start extends Component {

  componentWillMount() {
    // this.props.setDeaf(true)
  }

  render() {
    return (
      <div>
        <div className="section-start-bg anm-element">
          <div className="oxygen-bottle anm-element" />
          <div className="oxygen-pipe anm-element" />
        </div>
        <div className="section-start-haze anm-element" />
      </div>
    )
  }
}
