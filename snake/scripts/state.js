
let state = {
    objects: []
}

export const register = obj => state.objects.push(obj)

export const unregister = id => state.objects.pop(objects[id])

export const getState = () => state