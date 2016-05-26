import React from 'react'
import ScreenAdapter from './ScreenAdapter'

export default ({ children, active, past, adapterType, ...rest }) => {
  return (
    <section {...rest} className={`rc-fullpage-section${active ? ' active' : ''}${past ? ' past' : ''}`}>
      <ScreenAdapter type={adapterType}>
        {children}
      </ScreenAdapter>
    </section>
  )
}

