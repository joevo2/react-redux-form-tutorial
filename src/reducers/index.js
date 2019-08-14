import { INCREMENT, DECREMENT, SAGA_UPDATE } from "../actions"

export function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload
    case DECREMENT:
      return state - action.payload
    case SAGA_UPDATE:
      return state + action.payload
    default:
      return state
  }
}