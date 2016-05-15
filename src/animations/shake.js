import React, { Component, PropTypes } from 'react'

export default class ShakeAnimation extends Component {

  static propTypes = {
    delay: PropTypes.number
  };

  constructor(props) {
    super(props)

    this.state = {
      step: 0
    }
    this.sequence = [[0, 0], [10, 10], [10, 0], [0, 10], [0, 0]]
  }

  componentDidMount() {
    setTimeout(() => this.start(), this.props.delay)
  }

  componentWillUnmount() {
    this.finish()
  }

  start() {
    const round = () => {
      const current = this.state.step + 1
      if (current === this.sequence.length) {
        this.finish()
        return;
      }
      this.setState({
        step: current
      })
      this.tid = setTimeout(round, 100)
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
    const coord = this.sequence[step]
    const style = {
      transform: `translate3d(${coord[0]}px, ${coord[1]}px, 0)`,
      WebkitTransform: `translate3d(${coord[0]}px, ${coord[1]}px, 0)`
    }

    return (
      <div {...rest} style={style} />
    )
  }
}
