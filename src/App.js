import React from 'react'
import FullPage from './components/FullPage'
import './index.scss'

import Start from './sections/Start'
import Start2 from './sections/Start2'
import Start3 from './sections/Start3'


const preventScroll = e => e.preventDefault()
window.addEventListener('touchmove', preventScroll)

export default class App extends React.Component {
  state = {
    currentPage: +location.hash.split('debug')[1] || 0
  };

  nextPage() {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }

  render() {
    const pages = [Start, Start2, Start3]
    const { currentPage } = this.state

    const debug = location.hash.indexOf('debug') > 0

    return (
      <div>
        <FullPage pages={pages} currentPage={currentPage} />
        {
          debug && <button
            style={{ position: 'absolute', zIndex: '1000', top: 0, left: 0 }}
            onClick={::this.nextPage}
          >next</button>
        }
      </div>
    )
  }
}
