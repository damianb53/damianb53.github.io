import { ctx, canvas } from './index.js'
// import { getState } from './state.js'

export function generete(amount, what) {
    for(let i = 0; i < amount; i++) {
        what()
    }
}

export function updateCanvasSize(canvas) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    console.log('resize')
}

export function fillCanvas(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

export const appendCanvas = ({
    width, 
    height, 
    id = null,
    bgColor = 'blue',
    border = false,
}) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = width
    canvas.height = height

    border
    ? canvas.classList = 'hasBorder' 
    : null

    id 
    ? canvas.classList = canvas.classList + ' ' + id
    : null
    
    document.body.appendChild(canvas)

    ctx.fillStyle = bgColor;
    ctx.fillRect(0,0,canvas.width, canvas.height);

    console.log('canvas appended')
    return [canvas, ctx]
}