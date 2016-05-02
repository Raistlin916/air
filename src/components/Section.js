import React from 'react'

export default ({ children, ...rest }) =>
  <section className="rc-fullpage-section" {...rest}>
    {children}
  </section>
