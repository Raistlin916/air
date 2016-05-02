import React, { Component } from 'react'
import Section from './Section'
import { Motion, spring } from 'react-motion';

const springSettings = { stiffness: 170, damping: 26 }

export default class FullPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0
    }
    this.pages = [1, 2, 3]
  }

  nextPage() {
    let { currentPage } = this.state

    currentPage += 1

    if (currentPage >= this.pages.length) {
      currentPage = this.pages.length - 1
    }

    this.setState({ currentPage })
  }

  render() {
    const contentStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'white',
      textAlign: 'center'
    }
    const { currentPage } = this.state
    const { pages } = this
    let sectionConfigs = []

    sectionConfigs = pages.map(item => ({
      top: spring((item - currentPage - 1) * 100, springSettings)
    }))

    return (
      <div className="rc-fullpage-wrap">
        {
          pages.map((page, index) =>
            <Motion key={index} style={sectionConfigs[index]}>
              {style =>
                <Section
                  style={{
                    '-webkit-transform': `translate3d(0, ${style.top}%, 0)`,
                    transform: `translate3d(0, ${style.top}%, 0)`
                  }}
                >
                  <div style={contentStyle}>
                    section{page}
                  </div>
                </Section>
              }
            </Motion>
          )
        }
        <button style={{ position: 'absolute' }} onClick={::this.nextPage}>next</button>
      </div>
    )
  }
}
