import React from 'react'
import Section from './Section'

export default () =>
  <div className="rc-fullpage-wrap">
    {
      [1, 2, 3].map((item, index) => <Section key={index} />)
    }
  </div>
