import React from 'react'

export default ({ className, children, ...rest }) => {
  return <div className={`${className || ''} anm-element`} {...rest} >{children}</div>
}
