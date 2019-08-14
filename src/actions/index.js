export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SAGA_UPDATE = 'INCREMENT_SAGA_UPDATE'

export const increase = value => ({ type: INCREMENT, payload: value })
export const decrease = value => ({ type: DECREMENT, payload: value })