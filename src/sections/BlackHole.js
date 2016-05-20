import React, { Component } from 'react'
import './styles/blackhole.scss'
import AnmElement from '../components/AnmElement'

export default class BlackHole extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasEnter: false
    }
  }

  render() {
    const { hasEnter } = this.state

    return (
      <AnmElement className={`blackhole-bg ${hasEnter ? 'boom' : ''}`}>
        <AnmElement
          className="blackhole-btn"
          onClick={() => this.setState({ hasEnter: true })}
        />
        <AnmElement className="blackhole-text1" />
        <AnmElement className="blackhole-text2" />
        <AnmElement className="blackhole-text3" />
      </AnmElement>
    )
  }
}
