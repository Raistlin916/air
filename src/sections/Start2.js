import React, { Component, PropTypes } from 'react'
import './styles/start2.scss'
import AnmElement from '../components/AnmElement'

export default class Start2 extends Component {

  static propTypes = {
    active: PropTypes.bool,
    nextPage: PropTypes.func,
    setDeaf: PropTypes.func
  };

  render() {
    return (
      <div>
        <AnmElement className="section-start2-bg" />
        <AnmElement className="section-start2-people" />
        <AnmElement className="section-start2-haze" />
      </div>
    )
  }
}
