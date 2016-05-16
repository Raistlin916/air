import React from 'react'
import ScreenAdapter from './ScreenAdapter'

export default ({ children, active, ...rest }) => {
  const klass = 'rc-fullpage-section' + (active ? ' active' : '')
  return (
    <section {...rest} className={klass}>
      <ScreenAdapter>
        {children}
      </ScreenAdapter>
    </section>
  )
}

