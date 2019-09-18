import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Signup from '../containers/Signup'
import NotFound from '../containers/NotFound'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App
