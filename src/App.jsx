import React from 'react'
import Screens from './screens'
import './App.css'

import store from './store'

const test = store()
test.fetch()

export default () => (
  <div className="app">
    <h1>Powerpuff yourself</h1>

    <Screens />
  </div>
)
