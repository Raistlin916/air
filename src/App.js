import React from 'react'
import FullPage from './components/FullPage'
import './index.scss'

import Start from './sections/Start'
import Start2 from './sections/Start2'
import Start3 from './sections/Start3'
import BlackHole from './sections/BlackHole'


const preventScroll = e => e.preventDefault()
window.addEventListener('touchmove', preventScroll)

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.pages = [Start, Start2, Start3, BlackHole]
    this.isDeaf = false
  }

  state = {
    currentPage: +location.hash.split('debug')[1] || 0
  };

  onPageChangeEnd(currentPage, page) {

  }

  setDeaf(bool) {
    this.isDeaf = bool
  }

  nextPage() {
    if (this.isDeaf) {
      return;
    }
    let { currentPage } = this.state

    currentPage += 1

    if (currentPage >= this.pages.length) {
      currentPage = this.pages.length - 1
    }

    if (currentPage === this.state.currentPage) {
      return
    }

    this.setState({ currentPage })
  }

  render() {
    const nextPage = this.nextPage.bind(this)
    const setDeaf = this.setDeaf.bind(this)
    const pages = this.pages.map(item => () =>
      React.createElement(item, {
        nextPage, setDeaf
      })
    )

    const { currentPage } = this.state
    const debug = location.hash.indexOf('debug') > 0

    return (
      <div>
        <FullPage
          pages={pages} currentPage={currentPage} nextPage={nextPage}
          onPageChangeEnd={::this.onPageChangeEnd}
        />
        {
          debug && <button
            style={{ position: 'absolute', zIndex: 1000, top: 0, left: 0 }}
            onClick={nextPage}
          >next</button>
        }
      </div>
    )
  }
}
