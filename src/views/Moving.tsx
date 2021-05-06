import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { incrementCount, genNextButton } from '../constants/actions'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { Typography, Button } from '@material-ui/core'
import '../styles/moving.css'

const Moving = () => {
  const history = useHistory()
  const [top, setTop] = useState(200)
  const [left, setLeft] = useState(200)
  const dispatch = useDispatch()
  const next = useSelector((state: RootStateOrAny) => state.next)

  function handleHover () {
    console.log('yea')
    const prevTop = top
    const prevLeft = top
    setTop(Math.max(prevTop + 100*(Math.random() - 0.5), 0))
    setLeft(Math.max(prevLeft + 100*(Math.random() - 0.5), 0))
  }

  function handleGot () {
    if (next === 503) {
      dispatch(incrementCount())
      dispatch(genNextButton())
    }
  }

  function handleHome () {
    if (next === 504) {
      dispatch(incrementCount())
      dispatch(genNextButton())
      history.push('/')
    } else {
      history.push('/')
    }
  }

  return (
    <div className='moving-container'>
      <div>
        <Typography variant='h1'>Hello Moving!</Typography>
        <Button variant='contained' color='primary' onClick={handleHome}>Home</Button>
      </div>
      <Button
        id='moving'
        variant='contained'
        style={{top: `${top}px`, left: `${left}px`}}
        color='primary'
        onMouseOver={handleHover}
        onClick={handleGot}
      >
        hahahhahaha
      </Button>
    </div>
  )
}

export default Moving
