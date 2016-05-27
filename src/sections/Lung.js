import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import BubbleEffect from '../components/BubbleCanvas'
import AnmElement from '../components/AnmElement'
import './styles/lung.scss'

export default class Lung extends Component {

  static propTypes = {
    setDeaf: PropTypes.func,
    nextPage: PropTypes.func
  };

  state = {
    showBtn: false
  };

  componentDidMount() {
    const canvas = findDOMNode(this).querySelector('canvas')
    const coverImg = new Image()
    coverImg.src = 'http://img.yzcdn.cn/public_files/2016/05/26/d45bddcf2c2463c7c7aa324042705856.png'
    const bubbleEffect = new BubbleEffect(canvas, coverImg)
    bubbleEffect.init()

    this.props.setDeaf(true)
  }

  onTouch() {
    setTimeout(() => {
      this.setState({
        showBtn: true
      })
    }, 2000)
  }

  render() {
    const { showBtn } = this.state
    return (
      <AnmElement className="lung-bg">
        <canvas width={320} height={514} onTouchEnd={::this.onTouch} />
        {showBtn &&
          <AnmElement className="circle-btn fadeIn" onClick={() => this.props.nextPage(true)} />}
      </AnmElement>
    )
  }
}
