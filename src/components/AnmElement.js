import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'


export default class AnmElement extends Component {

  static propTypes = {
    className: PropTypes.string,
    // children: PropTypes.oneOfType([
    //   PropTypes.element,
    //   PropTypes.array
    // ]),
    onRest: PropTypes.func
  };

  constructor(props) {
    super(props)
    this.onAnimationEnd = this.onAnimationEnd.bind(this)
  }

  componentDidMount() {
    if (!this.props.onRest) {
      return
    }
    const element = findDOMNode(this)
    element.addEventListener('animationend', this.onAnimationEnd, false)
    element.addEventListener('webkitAnimationEnd', this.onAnimationEnd, false)
  }

  componentWillUnmount() {
    if (!this.props.onRest) {
      return
    }
    const element = findDOMNode(this)
    element.removeEventListener('animationend', this.onAnimationEnd, false)
    element.removeEventListener('webkitAnimationEnd', this.onAnimationEnd, false)
  }

  onAnimationEnd(e) {
    this.props.onRest(e)
  }

  render() {
    const { className, children, ...rest } = this.props
    return <div className={`${className || ''} anm-element`} {...rest} >{children}</div>
  }
}
