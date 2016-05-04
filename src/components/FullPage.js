import React, { Component, PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import Section from './Section'
import SwipeReceiver from './SwipeReceiver'


export default class FullPage extends Component {

  static defaultProps = {
    pages: []
  };

  static propTypes = {
    pages: PropTypes.array
  };

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      isDeaf: false
    }
  }

  setDeaf(bool) {
    this.setState({
      isDeaf: bool
    })
  }

  nextPage() {
    if (this.state.isDeaf) {
      return;
    }
    let { currentPage } = this.state
    const { pages } = this.props

    currentPage += 1

    if (currentPage >= pages.length) {
      currentPage = pages.length - 1
    }

    this.setState({ currentPage })
  }

  render() {
    const { currentPage, isDeaf } = this.state
    let { pages } = this.props
    let sectionConfigs = []

    pages = pages.map((page, index) => ({ page, index }))

    if (currentPage < 2) {
      pages = [pages[0], pages[1], pages[2]]
    } else {
      pages = pages.slice(currentPage - 1, currentPage + 2)
    }

    sectionConfigs = pages.map(item => ({
      top: spring((item.index - currentPage) * 100)
    }))


    return (
      <SwipeReceiver className="rc-fullpage-wrap" isDeaf={isDeaf} onSwipeUp={::this.nextPage}>
        {
          pages.map(({ page, index }, i) =>
            <Motion key={index} style={sectionConfigs[i]}>
              {style =>
                <Section
                  className="content-wrap"
                  style={{
                    WebkitTransform: `translate3d(0, ${style.top}%, 0)`,
                    transform: `translate3d(0, ${style.top}%, 0)`
                  }}
                >
                  {
                    React.createElement(page, {
                      setDeaf: ::this.setDeaf
                    })
                  }
                </Section>
              }
            </Motion>
          )
        }
        <button style={{ position: 'absolute' }} onClick={::this.nextPage}>next</button>
      </SwipeReceiver>
    )
  }
}
