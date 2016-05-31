import React, { Component, PropTypes } from 'react'
import './styles/start.scss'
import Shake from '../animations/Shake'
import AnmElement from '../components/AnmElement'


export default class Start extends Component {

  static propTypes = {
    active: PropTypes.bool,
    nextPage: PropTypes.func,
    setDeaf: PropTypes.func
  };

  componentDidMount() {
    if (this.props.active) {
      this.init()
    }
  }

  componentWillReceiveProps({ active }) {
    if (active) {
      this.init()
    }
  }

  init() {
    if (this.inited) {
      return
    }
    this.inited = true
    this.props.setDeaf(true)
    setTimeout(() => this.props.nextPage(true), 3000)
  }

  render() {
    return (
      <div onTouchStart={::this.init}>
        <AnmElement className="section-start-bg">
          <Shake className="oxygen-bottle anm-element" delay={1200} delayBetweenRound={1700} />
          <AnmElement className="oxygen-pipe" />
        </AnmElement>
        <AnmElement className="section-start-haze" />
      </div>
    )
  }
}
