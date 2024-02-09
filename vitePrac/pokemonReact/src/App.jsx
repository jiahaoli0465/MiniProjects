import { useState } from 'react'


import './App.css'

import Pokedex from './components/Pokedex'

function App() {


  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Pokedex</h1>
      <Pokedex/>
    </div>

  )
}

export default App
