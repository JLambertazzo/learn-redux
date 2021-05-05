interface Action {
  type: string,
  [key: string]: any
}

const clickReducer = (state: number = 0, action: Action): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

export default clickReducer
