function back(progress, x = 1.3) {
  return Math.pow(progress, 2) * ((x + 1) * progress - x)
}

function makeEaseOut(delta) {
  return progress => 1 - delta(1 - progress)
}

const delta = makeEaseOut(back)

export default class Bubble {
  constructor(ctx) {
    this.ctx = ctx
    this.coord = { x: null, y: null }
    this.maxRadius = 90
    this.animationPercent = 0
  }

  blow() {
    this.blowing = true
  }

  loose() {
    this.blowing = false
  }

  update(dt) {
    const { blowing } = this

    this.animationPercent += dt * 3 * (blowing ? 1 : -1)

    if (this.animationPercent > 1) {
      this.animationPercent = 1
    } else if (this.animationPercent < 0) {
      this.animationPercent = 0
    }

    this.draw()
  }

  draw() {
    const { ctx, coord, animationPercent, maxRadius } = this
    if (animationPercent <= 0) {
      return
    }

    const radius = delta(animationPercent) * maxRadius

    ctx.save()
    ctx.globalCompositeOperation = 'destination-out'
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(coord.x, coord.y - radius + 20, radius, 0, 2 * Math.PI, false)
    ctx.fill()

    ctx.globalCompositeOperation = 'source-over'
    ctx.restore()
  }

  moveTo(coord) {
    this.coord = coord
  }
}
