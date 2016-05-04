import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

const springSetting = { stiffness: 100, damping: 20 }

export default class Start extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationIndex: 0
    }
  }

  componentWillMount() {
    this.props.setDeaf(true)
  }

  playNext() {
    let { animationIndex } = this.state
    animationIndex += 1
    this.setState({ animationIndex })
  }

  render() {
    const { animationIndex } = this.state
    return (
      <div>
        <Motion
          defaultStyle={{ x: 0 }}
          style={{ x: spring(animationIndex >= 0 ? 1 : 0, springSetting) }}
          onRest={::this.playNext}
        >
          {style => <h1 style={{ opacity: style.x }}>LA RIVE GAUCHE</h1>}
        </Motion>
        <Motion
          defaultStyle={{ x: 0 }}
          style={{ x: spring(animationIndex >= 1 ? 1 : 0, springSetting) }}
          onRest={::this.playNext}
        >
          {style => <div style={{ opacity: style.x }}>Picture</div>}
        </Motion>
        <Motion
          defaultStyle={{ x: 0 }}
          style={{ x: spring(animationIndex >= 2 ? 1 : 0, springSetting) }}
          onRest={::this.playNext}
        >
          {style => <p style={{ opacity: style.x }}>some text</p>}
        </Motion>
      </div>
    )
  }
}
