import React from 'react'
import '../styles/home.css'
import { incrementCount, genNextButton } from '../constants/actions'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const next = useSelector((state: RootStateOrAny) => state.next)

  function handleMany () {
    if (next === 501) {
      dispatch(incrementCount())
      dispatch(genNextButton())
    } else {
      history.push('/many')
    }
  }
  function handleMoving () {
    if (next === 502) {
      dispatch(incrementCount())
      dispatch(genNextButton())
    } else {
      history.push('/moving')
    }
  }
  return (
    <div className='home-container'>
      <div>
        <Typography variant='h1'>Hello World!</Typography>
        <div className='button-container'>
          <Button variant='contained' color='primary' onClick={handleMany}>Hall of Buttons</Button>
          <span>  </span>
          <Button variant='contained' color='primary' onClick={handleMoving}>Moving Button</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
