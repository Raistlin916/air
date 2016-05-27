import React, { Component, PropTypes } from 'react'
import AnmElement from '../../components/AnmElement'

export default class Winter extends Component {

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
  }

  render() {
    const { nextPage } = this.props
    return (
      <AnmElement className="season-winter season-bg">
        <AnmElement className="text" />
        <AnmElement className="swallow" />
        <AnmElement className="seed" onClick={nextPage} />
      </AnmElement>
    )
  }
}
