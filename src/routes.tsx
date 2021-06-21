import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Home'
import Netflix from './Pages/Netflix'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/netflix" component={Netflix} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
