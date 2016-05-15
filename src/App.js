import React from 'react'
import FullPage from './components/FullPage'
import './index.scss'

import Start from './sections/Start'
import Start2 from './sections/Start2'
import ChapterOne from './sections/ChapterOne'


const preventScroll = e => e.preventDefault()
window.addEventListener('touchmove', preventScroll)

export default () => {
  const pages = [Start, Start2, ChapterOne]
  return <FullPage pages={pages} />
}
