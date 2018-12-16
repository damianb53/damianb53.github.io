
import { 
    appendCanvas,
    fillCanvas,
    generete,
    updateCanvasSize
} from './utils.js'
import { register, unregister, getState } from './state.js'
import { canvasConfig } from './config/canvasConfig.js'
import Circle from './figures/circle.js'

export const [canvas, ctx] = appendCanvas(canvasConfig)
window.addEventListener('resize', () => updateCanvasSize(canvas))

console.log({canvas, ctx})

generete(100,() => register(new Circle({x: 100, y: 100, color: `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`, radius: 50, dx: 10*Math.random(), dy: 10*Math.random()})))

console.table(getState().objects);


;(function animation() {
    requestAnimationFrame(animation)
    // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    fillCanvas(canvasConfig.bgColor)
    getState().objects.map(e => e.update())
})()


