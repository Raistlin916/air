import React, { Component, PropTypes } from 'react'
import AnmElement from '../components/AnmElement'
import './styles/blow.scss'

export default class Blow extends Component {

  static propTypes = {
    nextPage: PropTypes.func,
    setDeaf: PropTypes.func
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
    setTimeout(() => this.props.nextPage(true), 1000)
  }

  blow() {
    this.setState({
      hasBlow: true
    })
  }

  render() {
    const { hasBlow } = this.state
    return (
      <AnmElement className={`blow-bg ${hasBlow ? 'blowwed' : ''}`}>
        <AnmElement className="blow-fog2" onRest={::this.onFogDisapear} />
        <AnmElement className="blow-fog3" />
        <AnmElement className="blow-text1" />
        <div className="blow-bottom-action">
          <AnmElement className="blow-text2" />
          <AnmElement className="circle-btn" onClick={::this.blow} />
        </div>
      </AnmElement>
    )
  }
}
