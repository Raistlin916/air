import React, { Component, PropTypes } from 'react'
import './styles/start3.scss'
import AnmElement from '../components/AnmElement'


export default class Start2 extends Component {

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
    setTimeout(() => this.props.nextPage(true), 4000)
  }

  render() {
    return (
      <AnmElement className="section-start3-bg">
        <AnmElement className="section-start3-haze" />
        <AnmElement className="section-start3-cover" />
      </AnmElement>
    )
  }
}
