import React, { Component } from 'react'
import AnmElement from '../components/AnmElement'
import './styles/end.scss'

export default class End extends Component {

  state = {
    showShare: false
  };

  restart() {
    location.reload()
  }

  toggleShare(bool) {
    this.setState({
      showShare: bool
    })
  }

  render() {
    const { showShare } = this.state
    return (
      <AnmElement className="end-bg">
        <AnmElement className="restart-btn" onClick={::this.restart} />
        <AnmElement className="share-btn" onClick={() => this.toggleShare(true)} />
        {
          showShare &&
            <AnmElement className="share-cover" onClick={() => this.toggleShare(false)} />
        }
      </AnmElement>
    )
  }
}
