import React, { Component, PropTypes } from 'react'
import { Motion, spring } from 'react-motion'

export default class SequenceAnimation extends Component {

  static propTypes = {
    springSetting: PropTypes.object,
    children: PropTypes.array
  };

  constructor(props) {
    super(props)
    this.state = {
      animationIndex: 0
    }
  }

  playNext() {
    let { animationIndex } = this.state
    animationIndex += 1
    this.setState({ animationIndex })
  }

  render() {
    const { animationIndex } = this.state
    const { children } = this.props
    return (
      <div>
        {
          children.map((fn, index) =>
            <Motion
              defaultStyle={{ percent: 0 }}
              style={{ percent: spring(animationIndex >= index ? 1 : 0) }}
              onRest={::this.playNext}
              key={index}
            >{style => fn(style)}</Motion>
          )
        }
      </div>
    )
  }
}

