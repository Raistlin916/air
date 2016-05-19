import React, { Component, PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import Section from './Section'
import SwipeReceiver from './SwipeReceiver'


export default class FullPage extends Component {

  static defaultProps = {
    pages: [],
    adapterType: 'cover',
    currentPage: 0
  };

  static propTypes = {
    pages: PropTypes.array,
    adapterType: PropTypes.string,
    currentPage: PropTypes.number
  };

  constructor(props) {
    super(props)
    this.state = {
      currentPage: props.currentPage,
      isDeaf: false
    }
  }

  componentWillReceiveProps({ currentPage }) {
    this.setState({ currentPage })
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
    let { pages, adapterType } = this.props
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
      <SwipeReceiver
        className="rc-fullpage-wrap"
        isDeaf={isDeaf} onSwipeUp={::this.nextPage}
      >
        {
          pages.map(({ page, index }, i) =>
            <Motion key={index} style={sectionConfigs[i]}>
              {style =>
                <Section
                  active={currentPage === i}
                  style={{
                    WebkitTransform: `translate3d(0, ${style.top}%, 0)`,
                    transform: `translate3d(0, ${style.top}%, 0)`
                  }}
                  adapterType={adapterType}
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
      </SwipeReceiver>
    )
  }
}
