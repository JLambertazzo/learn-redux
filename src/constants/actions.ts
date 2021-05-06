export const incrementCount = () => {
  return {
    type: 'INCREMENT'
  }
}

export const nextButton = (val: number) => {
  return {
    type: 'NEXT',
    payload: val
  }
}

export const genNextButton = () => {
  return (dispatch: any, getState: any) => {
    const val = Math.ceil(Math.random()*505 + 1)
    dispatch(nextButton(val))
  }
}
