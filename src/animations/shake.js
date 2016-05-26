import React, { Component, PropTypes } from 'react'

export default class ShakeAnimation extends Component {

  static propTypes = {
    delay: PropTypes.number,
    delayBetweenRound: PropTypes.number
  };

  constructor(props) {
    super(props)

    this.state = {
      step: 0
    }
    this.sequence = [
      [0, 0], [-1, -2, 1], [-1, 2, 0], [-1, 0, 0], [0, -2, -1], [0, 0]
    ]
  }

  componentDidMount() {
    this.tid = setTimeout(::this.start, this.props.delay)
  }

  componentWillUnmount() {
    this.finish()
  }

  start() {
    this.setState({
      step: 0
    })

    const round = () => {
      const current = this.state.step + 1
      if (current === this.sequence.length) {
        this.finish();
        this.tid = setTimeout(::this.start, this.props.delayBetweenRound)
        return;
      }
      this.setState({
        step: current
      })
      this.tid = setTimeout(round, 80)
    }

    round()
  }

  finish() {
    clearTimeout(this.tid)
    this.tid = null
  }

  render() {
    const { ...rest } = this.props
    const { step } = this.state
    const styles = this.sequence[step]
    const rotate = styles[2] || 0
    const style = {
      transform: `translate3d(${styles[0]}px, ${styles[1]}px, 0) rotate(${rotate}deg)`,
      WebkitTransform: `translate3d(${styles[0]}px, ${styles[1]}px, 0) rotate(${rotate}deg)`,
      transformOrigin: '50% 50px',
      WebkitTransformOrigin: '50% 50px'
    }

    return (
      <div {...rest} style={style} />
    )
  }
}
