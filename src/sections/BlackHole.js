import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import './styles/blackhole.scss'
import AnmElement from '../components/AnmElement'
import BrushCanvas from '../components/BrushCanvas'


const canvasWrap = (
  <AnmElement className="blackhole-canvas-wrap">
    <canvas width={320} height={514} />
  </AnmElement>
)

export default class BlackHole extends Component {

  static propTypes = {
    setDeaf: PropTypes.func,
    active: PropTypes.bool,
    nextPage: PropTypes.func
  };

  constructor(props) {
    super(props)
    this.state = {
      hasEnter: false,
      showBlackHole: true,
      startBrush: false,
      showWindow: false,
      brushCache: false
    }

    this.coverImg = new Image()
    this.coverImg.src = 'http://img.yzcdn.cn/public_files/2016/05/27/6acad3f42f02b19c80a7272bee8b6d0c.png'
  }

  componentDidMount() {
    if (this.props.active) {
      this.props.setDeaf(true)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.props.setDeaf(true)
    }
  }

  componentWillUnmount() {
    this.brush.destroy()
  }

  initBrush() {
    if (this.state.startBrush) {
      return
    }
    setTimeout(() => this.setState({ brushCache: true }), 500)
    this.setState({ startBrush: true }, () => {
      const canvas = findDOMNode(this).querySelector('canvas')
      this.brush = new BrushCanvas(canvas, this.coverImg, () => {
        setTimeout(() => {
          this.setState({ showWindow: true })
        }, 1500)
        this.brush.destroy()
        setTimeout(() => this.props.nextPage(true), 2000)
      })
      this.brush.init()
    })
  }

  render() {
    const { hasEnter, showBlackHole, startBrush, brushCache, showWindow } = this.state
    return (
      <div className={`${hasEnter ? 'boom' : ''}`}>
        {
          showBlackHole &&
            <AnmElement className="blackhole-bg">
              <AnmElement className="blackhole-star" />
              <AnmElement
                className="blackhole-btn"
                onClick={() => this.setState({ hasEnter: true })}
              />
              <AnmElement className="blackhole-text1" />
              <AnmElement className="blackhole-text2" />
              <AnmElement className="blackhole-text3" />
            </AnmElement>
        }
        {
          hasEnter &&
            <div onTouchStart={::this.initBrush}>
              {
                (brushCache && startBrush) ||
                  <AnmElement
                    className="blackhole-chemney"
                    onRest={() => this.setState({ showBlackHole: false })}
                  />
              }
              {
                !startBrush &&
                  <AnmElement
                    className="blackhole-hand-btn"
                  />
              }
              {
                brushCache && startBrush &&
                  <div>
                    <AnmElement className="blackhole-city" />
                  </div>
              }
              {
                startBrush && !showWindow && canvasWrap
              }
            </div>
        }
      </div>
    )
  }
}
