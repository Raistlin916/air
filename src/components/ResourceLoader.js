import React, { Component, PropTypes } from 'react'

export default class ResourceLoader extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
    onProgress: PropTypes.func,
    onComplete: PropTypes.func,
    children: PropTypes.func,
    delayBeforeComplete: PropTypes.number
  };

  static defaultProps = {
    onProgress: () => {},
    onComplete: () => {},
    delayBeforeComplete: 0
  };

  constructor(props) {
    super(props)
    this.state = {
      percent: 0,
      complete: false
    }
    this.resources = {}
  }

  componentWillMount() {
    const { list } = this.props
    let loadedNum = 0
    const ps = list.map(item =>
      new Promise(resolve => {
        const img = new Image
        img.src = item.src
        img.onload = img.onerror = () => {
          loadedNum ++
          const percent = parseInt(loadedNum / list.length * 100, 10)
          this.setState({ percent })
          this.props.onProgress(percent)
          this.resources[item.name] = img
          resolve()
        }
      })
    )

    Promise.all(ps)
      .then(() => {
        setTimeout(() => {
          this.setState({ complete: true })
          this.props.onComplete()
        }, this.props.delayBeforeComplete)
      })
  }

  render() {
    const { children } = this.props
    const { percent, complete } = this.state
    return <div>{children && children(percent, complete, this.resources)}</div>
  }
}
