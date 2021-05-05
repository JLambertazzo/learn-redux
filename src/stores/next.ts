interface Action {
  type: string,
  payload: number,
  [key: string]: any
}

const nextReducer = (state: number = 50, action: Action): number => {
  switch (action.type) {
    case 'NEXT':
      return action.payload
    default:
      return state
  }
}

export default nextReducer
