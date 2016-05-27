import React from 'react'
import FullPage from './components/FullPage'
import './index.scss'

import Start from './sections/Start'
import Start2 from './sections/Start2'
import Start3 from './sections/Start3'
import BlackHole from './sections/BlackHole'
import Lung from './sections/Lung'
import Blow from './sections/Blow'
import Spring from './sections/seasons/Spring'
import Summer from './sections/seasons/Summer'
import Autumn from './sections/seasons/Autumn'
import Winter from './sections/seasons/Winter'

import ResourceLoader from './components/ResourceLoader'
import resources from './resources.js'
resources.list = JSON.parse(resources.list)


const preventScroll = e => e.preventDefault()
window.addEventListener('touchmove', preventScroll)

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.pages = [Start, Start2, Start3, BlackHole, Lung, Blow, Spring, Summer, Autumn, Winter]
    this.isDeaf = false
    this.resourceList = resources.list
  }

  state = {
    currentPage: +location.hash.split('debug')[1] || 0
  };

  onPageChangeEnd(currentPage, page) {

  }

  setDeaf(bool) {
    this.isDeaf = bool
  }

  nextPage(force) {
    if (this.isDeaf && !force) {
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
        <ResourceLoader list={this.resourceList} />
      </div>
    )
  }
}
