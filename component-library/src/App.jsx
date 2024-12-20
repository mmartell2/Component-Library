import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Badge from './components/badges/Badge'

function App() {

  return (
    <main>
      <section>
        <h1>Badges</h1>
        <Badge 
          color="blue" 
          shape="pilled" 
          children={"Blue Pilled Badge"}
        />
        <Badge 
          color="red" 
          shape="squared" 
          children={"Red Squared Badge"}
        />
        <Badge 
          color="indigo" 
          shape="squared" 
          children={"Indigo Squared Badge"}
        />
        <Badge 
          color="green" 
          shape="pilled" 
          children={"Green Pilled Badge"}
        />
      </section>
      <section>
        <h1>Banners</h1>
      </section>
    </main>
  )
}

export default App
