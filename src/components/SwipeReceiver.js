import React, { Component, PropTypes } from 'react'

function standardizeEvent(e) {
  const type = e.type;
  if (type.indexOf('touch') !== -1) {
    const touch = e.touches[0] || e.changedTouches[0];
    return {
      pageX: touch.pageX,
      pageY: touch.pageY,
    }
  }

  return {
    pageX: e.pageX,
    pageY: e.pageY
  }
}

export default class SwipeReceiver extends Component {

  static defaultProps = {
    onSwipeDown: () => {},
    onSwipeUp: () => {}
  };

  static propTypes = {
    onSwipeUp: PropTypes.func,
    onSwipeDown: PropTypes.func,
    children: PropTypes.array
  };

  constructor(props) {
    super(props)
    this.startAt = null
  }

  handleStart(e) {
    const event = standardizeEvent(e)
    this.startAt = event
  }

  handleEnd(e) {
    const event = standardizeEvent(e)
    if (!this.startAt) {
      return
    }

    if (this.startAt.pageY - event.pageY > 40) {
      this.props.onSwipeUp()
    }
    if (this.startAt.pageY - event.pageY < -40) {
      this.props.onSwipeDown()
    }
    this.startAt = null
  }

  render() {
    const { children, ...rest } = this.props
    return (
      <div
        {...rest}
        onTouchStart={::this.handleStart}
        onMouseDown={::this.handleStart}
        onTouchEnd={::this.handleEnd}
        onTouchCancel={::this.handleEnd}
        onMouseDown={::this.handleEnd}
      >
        {children}
      </div>
    )
  }
}
