import React, { Component, PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import Section from './Section'
import SwipeReceiver from './SwipeReceiver'


export default class FullPage extends Component {

  static defaultProps = {
    pages: [],
    adapterType: 'cover',
    currentPage: 0,
    onPageChangeEnd: () => {}
  };

  static propTypes = {
    pages: PropTypes.array,
    adapterType: PropTypes.string,
    currentPage: PropTypes.number,
    nextPage: PropTypes.func,
    isDeaf: PropTypes.bool,
    onPageChangeEnd: PropTypes.func
  };

  render() {
    let { pages } = this.props
    const { nextPage, currentPage, isDeaf, adapterType, onPageChangeEnd } = this.props
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
        isDeaf={isDeaf} onSwipeUp={nextPage}
      >
        {
          pages.map(({ page, index }, i) => {
            const active = currentPage === index
            const past = currentPage > index
            return (
              <Motion
                key={index} style={sectionConfigs[i]}
                onRest={() => active && onPageChangeEnd(currentPage, page)}
              >
                {style =>
                  <Section
                    active={active}
                    past={past}
                    style={{
                      WebkitTransform: `translate3d(0, ${style.top}%, 0)`,
                      transform: `translate3d(0, ${style.top}%, 0)`
                    }}
                    adapterType={adapterType}
                  >
                    {
                      React.cloneElement(page(), {
                        active,
                        past
                      })
                    }
                  </Section>
                }
              </Motion>
            )
          }
          )
        }
      </SwipeReceiver>
    )
  }
}
