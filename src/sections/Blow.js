import React, { Component, PropTypes } from 'react'
import AnmElement from '../components/AnmElement'
import './styles/blow.scss'

export default class Blow extends Component {
  static propTypes = {
    nextPage: PropTypes.func
  };

  render() {
    return (
      <AnmElement className="blow-bg">
        <AnmElement className="blow-fog2" />
        <AnmElement className="blow-fog3" />
        <AnmElement className="blow-text1" />
        <AnmElement className="blow-text2" />
        <AnmElement className="circle-btn" onClick={this.props.nextPage} />
      </AnmElement>
    )
  }
}
