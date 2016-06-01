import React, { Component, PropTypes } from 'react'
import AnmElement from '../components/AnmElement'
import Spring from './seasons/Spring'
import './styles/blow.scss'

export default class Blow extends Component {

  static propTypes = {
    nextPage: PropTypes.func,
    setDeaf: PropTypes.func,
    active: PropTypes.bool
  };

  state = {
    hasBlow: false
  };

  componentDidMount() {
    if (this.props.active) {
      this.props.setDeaf(true)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.props.setDeaf(true)
    }
  }

  onFogDisapear() {
    setTimeout(() => this.props.nextPage(true), 2000)
  }

  blow() {
    setTimeout(() =>
      this.setState({
        hasBlow: true
      })
    , 1000)

    const audio = new Audio()
    audio.src = 'http://img.yzcdn.cn/wind_blow.wav'
    audio.play()
  }

  render() {
    const { hasBlow } = this.state
    return (
      <div>
        {hasBlow && <Spring />}
        <AnmElement className={`blow-bg ${hasBlow ? 'blowwed' : ''}`}>
          <AnmElement className="blow-fog2" onRest={::this.onFogDisapear} />
          <AnmElement className="blow-fog3" />
          <AnmElement className="blow-text1" />
          <div className="blow-bottom-action">
            <AnmElement className="blow-text2" />
            <AnmElement className="circle-btn" onTouchStart={::this.blow} />
          </div>
        </AnmElement>
      </div>
    )
  }
}
