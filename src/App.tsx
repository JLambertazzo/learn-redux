import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Many from './views/Many'
import Moving from './views/Moving'
import { RootStateOrAny, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

const App = () => {
  const clicks = useSelector((state: RootStateOrAny) => state.clicks)
  return (
    <BrowserRouter>
      <Typography variant='h3' style={{textAlign: 'center'}}>Clicks: {clicks}</Typography>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/many' render={() => <Many />} />
        <Route exact path='/moving' render={() => <Moving />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
