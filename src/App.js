import React from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import { Home, Browse, Signin, Signup } from './pages'
import * as ROUTES from './constants/routes'

export default function App() {
  return (
    <Routes>
      <Route exact path={ROUTES.HOME}>
        <Home/>
      </Route>
      <Route exact path='/signup'>
        <Signup/>
      </Route>
      <Route exact path='/signin'>
        <Signin/>
      </Route>
      <Route exact path='/browse'>
        <Browse/>
      </Route>
    </Routes>
  )
}
