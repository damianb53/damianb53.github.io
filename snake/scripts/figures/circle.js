import { ctx } from '../index.js'
import { Vector2 } from '../dataTypes.js'

export default class Circle {
    constructor({x, y, dx, dy, radius, color}) {
        this.position = new Vector2(x, y)
        this.speed = new Vector2(dx, dy)
        this.radius = radius
        this.color = color ? color : 'red'
    }
    draw() {
        ctx.beginPath()
        ctx.strokeStyle = this.color
        ctx.arc(this.position.x, this.position.y, this.radius,0, this.radius * Math.PI * 2, false)
        ctx.stroke()
    }
    update() {

        this.position.x += this.speed.x
        this.position.y += this.speed.y

        if(this.position.x + this.radius > window.innerWidth || this.position.x - this.radius < 0) {
            this.speed.x = -this.speed.x
        }
        if(this.position.y + this.radius > window.innerHeight || this.position.y - this.radius < 0) {
            this.speed.y = -this.speed.y
        }

        this.draw()
        
    }
}