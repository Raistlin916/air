import React, { Component, PropTypes } from 'react'
import './styles/blackhole.scss'
import AnmElement from '../components/AnmElement'

export default class BlackHole extends Component {

  static propTypes = {
    setDeaf: PropTypes.func,
    active: PropTypes.bool
  };

  constructor(props) {
    super(props)
    this.state = {
      hasEnter: true,
      showCity: false,
    }
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

  render() {
    const { hasEnter, showCity } = this.state

    return (
      <div className={`${hasEnter ? 'boom' : ''}`}>
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
        <AnmElement className="blackhole-chemney">
          {
            showCity &&
              <AnmElement className="blackhole-city">
                <AnmElement className="blackhole-window" />
              </AnmElement>
          }
          {
            !showCity &&
              <AnmElement
                className="blackhole-hand-btn"
                onClick={() => this.setState({ showCity: true })}
              />
          }
        </AnmElement>
      </div>
    )
  }
}
