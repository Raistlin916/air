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

  setDeaf(bool) {
    this.setState({
      isDeaf: bool
    })
  }

  render() {
    const { currentPage, isDeaf } = this.state
    const { pages } = this.props
    let sectionConfigs = []

    sectionConfigs = pages.map((item, index) => ({
      top: spring((index - currentPage) * 100)
    }))

    return (
      <SwipeReceiver className="rc-fullpage-wrap" isDeaf={isDeaf} onSwipeUp={::this.nextPage}>
        {
          pages.map((page, index) =>
            <Motion key={index} style={sectionConfigs[index]}>
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
