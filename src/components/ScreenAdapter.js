import React from 'react'

export default props => {
  const originSize = { width: 320, height: 568 }
  const scale = Math.min(window.screen.width, 500) / originSize.width
  const style = {
    transform: `scale(${scale})`,
    WebkitTransform: `scale(${scale})`,
    transformOrigin: 'left top',
    WebkitTransformOrigin: 'left top',
    ...originSize
  }
  return <div {...props} style={style}></div>
}
