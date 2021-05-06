import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
import { incrementCount, genNextButton } from '../constants/actions'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import '../styles/many.css'

const Grid = () => {
  const history = useHistory()
  const arr = Array.from(Array(500).keys())
  const dispatch = useDispatch()
  const next = useSelector((state: RootStateOrAny) => state.next)

  function handleHome () {
    if (next === 505) {
      dispatch(incrementCount())
      dispatch(genNextButton())
    } else {
      history.push('/')
    }
  }

  function handleCorrect () {
    dispatch(incrementCount())
    dispatch(genNextButton())
    history.push('/')
  }

  function handleBad () {
    console.log('nope')
  }

  return (
    <div className='many-container'>
      <Typography variant='h1'>Hello Many!</Typography>
      <Button variant='contained' color='primary' onClick={handleHome}>Home</Button>
      <div className='many-buttons'>
        {arr.map((n, i) => {
          const handlePress = i === next ? handleCorrect : handleBad
          return (<Button variant='contained' color='primary' key={i} onClick={handlePress}>{n}</Button>)
        })}
      </div>
    </div>
  )
}

export default Grid
