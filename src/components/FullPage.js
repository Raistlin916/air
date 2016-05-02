import React, { Component } from 'react'
import Section from './Section'
import { Motion, spring } from 'react-motion';

const springSettings = { stiffness: 170, damping: 26 };
const pages = [1, 2, 3]

export default class FullPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0
    }
  }

  nextPage() {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
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
    let sectionConfigs = []

    sectionConfigs = pages.map(item => {
      return {
        top: spring((item - currentPage - 1) * 100, springSettings)
      }
    })

    return (
      <div className="rc-fullpage-wrap">
        {
          pages.map((page, index) =>
            <Motion key={index} style={sectionConfigs[index]}>
              {style =>
                <Section style={{ transform: `translate3d(0, ${style.top}%, 0)` }}>
                  <div style={contentStyle}>
                    section{page}
                    <p>{style.top}</p>
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
