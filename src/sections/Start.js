import React, { Component } from 'react'
import SequenceAnimation from '../components/SequenceAnimation'

const springSetting = { stiffness: 100, damping: 20 }

export default class Start extends Component {

  componentWillMount() {
    this.props.setDeaf(true)
  }

  render() {
    return (
      <div>
        <SequenceAnimation onRest={() => this.props.setDeaf(false)} springSetting={springSetting}>
        {
          [
            style => <h1 style={{ opacity: style.percent }}>LA RIVE GAUCHE</h1>,
            style => <div style={{ opacity: style.percent }}>Picture</div>,
            style => <p style={{ opacity: style.percent }}>some text</p>
          ]
        }
        </SequenceAnimation>
      </div>
    )
  }
}
