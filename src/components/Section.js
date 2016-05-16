import React from 'react'
import ScreenAdapter from './ScreenAdapter'

export default ({ children, ...rest }) =>
  <ScreenAdapter>
    <section className="rc-fullpage-section" {...rest}>
      {children}
    </section>
  </ScreenAdapter>
