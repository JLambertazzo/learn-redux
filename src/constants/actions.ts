export const incrementCount = () => {
  return {
    type: 'INCREMENT'
  }
}

export const nextButton = () => {
  const val = Math.ceil(Math.random()*505 + 1)
  return {
    type: 'NEXT',
    payload: val
  }
}
