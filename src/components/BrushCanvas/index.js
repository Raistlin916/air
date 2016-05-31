import Brush from './Brush'

function screenAdapter(coord) {
  const originSize = { width: 320, height: 514 }
  const scale = Math.min(window.innerWidth, 500) / originSize.width

  return {
    pageX: coord.pageX / scale,
    pageY: coord.pageY / scale
  }
}

function standardizeEvent(e) {
  const type = e.type;
  if (type.indexOf('touch') !== -1) {
    const touch = e.touches[0] || e.changedTouches[0];
    return screenAdapter({
      pageX: touch.pageX,
      pageY: touch.pageY,
    })
  }
  return screenAdapter({
    pageX: e.pageX,
    pageY: e.pageY
  })
}


export default class BrushEffect {
  constructor(canvas, bg, onFinish) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.bg = bg
    this.size = {
      width: canvas.width,
      height: canvas.height
    }

    this.onFinish = onFinish
  }

  init() {
    this.brush = new Brush(this.ctx, this.onFinish)
    this.initEvents()
    this.startRound()
  }

  initEvents() {
    this.moveListener = e => {
      const standardEvent = standardizeEvent(e)
      const offsetCoord = this.translatePageToOffsetCoord(standardEvent)
      this.brush.moveTo(offsetCoord)
    }
    this.startListener = e => {
      const standardEvent = standardizeEvent(e)
      const offsetCoord = this.translatePageToOffsetCoord(standardEvent)
      this.brush.moveTo(offsetCoord)
    }
    this.endListener = () => {
      this.brush.finishStroke()
    }
    this.canvas.addEventListener('mousedown', this.startListener)
    this.canvas.addEventListener('mousemove', this.moveListener)
    this.canvas.addEventListener('mouseup', this.endListener)
    this.canvas.addEventListener('touchstart', this.startListener)
    this.canvas.addEventListener('touchmove', this.moveListener)
    this.canvas.addEventListener('touchend', this.endListener)
  }

  translatePageToOffsetCoord(e) {
    const elemRect = this.canvas.getBoundingClientRect();
    const x = e.pageX - elemRect.left;
    const y = e.pageY - elemRect.top;
    return { x, y }
  }

  startRound() {
    let lastTime = 0
    let appTime = 0
    const r = time => {
      this.rid = requestAnimationFrame(r)
      let dt = time - lastTime
      if (dt < 10) return
      if (dt > 100) dt = 16
      lastTime = time
      dt /= 1000
      appTime += dt
      this.update(dt)
    }
    this.rid = requestAnimationFrame(r)
  }

  update(dt) {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height)
    this.ctx.drawImage(this.bg, 0, 0, this.bg.width, this.bg.height,
      0, 0, this.size.width, this.size.height)
    this.brush.update(dt)
  }

  destroy() {
    this.canvas.removeEventListener('mousedown', this.startListener)
    this.canvas.removeEventListener('mousemove', this.moveListener)
    this.canvas.removeEventListener('mouseup', this.endListener)
    this.canvas.removeEventListener('touchstart', this.startListener)
    this.canvas.removeEventListener('touchmove', this.moveListener)
    this.canvas.removeEventListener('touchend', this.endListener)
    cancelAnimationFrame(this.rid)
  }
}

