import React from 'react'


let test = false;
export default props => {
  const { type } = props
  let style
  if (type === 'contain') {
    style = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  } else {
    const originSize = { width: 320, height: 514 }
    const scale = Math.min(window.innerWidth, 500) / originSize.width
    test = true
    style = {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
      transformOrigin: 'left top',
      WebkitTransformOrigin: 'left top',
      ...originSize
    }
  }
  return <div {...props} style={style}></div>
}
