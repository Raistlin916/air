import React, { Component, PropTypes } from 'react'
import './styles/start3.scss'
import AnmElement from '../components/AnmElement'


export default class Start2 extends Component {

  static propTypes = {
    active: PropTypes.bool,
    nextPage: PropTypes.func,
    setDeaf: PropTypes.func
  };

  render() {
    return (
      <AnmElement className="section-start3-bg">
        <AnmElement className="section-start3-haze" />
        <AnmElement className="section-start3-cover" />
      </AnmElement>
    )
  }
}
