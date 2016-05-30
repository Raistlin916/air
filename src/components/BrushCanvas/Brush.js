export default class Brush {
  constructor(ctx, onFinish) {
    this.ctx = ctx
    this.ctx.lineCap = 'round'
    this.ctx.lineWidth = 60
    this.ctx.strokeStyle = 'white'
    this.currentPoints = []
    this.strokes = []
    this.onFinish = onFinish || function() {}
  }

  update() {
    this.draw()
  }

  draw() {
    const { ctx } = this

    ctx.save()
    ctx.globalCompositeOperation = 'destination-out'

    this.drawStroke(ctx, this.currentPoints)
    this.strokes.forEach(stroke => this.drawStroke(ctx, stroke))

    ctx.globalCompositeOperation = 'source-over'
    ctx.restore()
  }

  drawStroke(ctx, stroke) {
    ctx.beginPath()
    stroke.forEach((pt, i) => {
      ctx[i === 0 ? 'moveTo' : 'lineTo'](pt.x, pt.y)
    })
    ctx.stroke()
  }

  finishStroke() {
    if (this.currentPoints.length <= 3) {
      this.currentPoints = []
      return
    }
    this.strokes.push(this.currentPoints)
    this.currentPoints = []

    const totalPts = this.strokes.reduce((sum, item) => sum + item.length, 0)
    if (totalPts > 100) {
      this.onFinish()
    }
  }

  moveTo(coord) {
    this.currentPoints.push(coord)
  }
}
