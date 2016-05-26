import React, { Component } from 'react'
import './styles/start.scss'
import Shake from '../animations/Shake'
import AnmElement from '../components/AnmElement'


export default class Start extends Component {
  render() {
    return (
      <div>
        <AnmElement className="section-start-bg">
          <Shake className="oxygen-bottle anm-element" delay={1200} delayBetweenRound={1700} />
          <AnmElement className="oxygen-pipe" />
        </AnmElement>
        <AnmElement className="section-start-haze" />
      </div>
    )
  }
}
