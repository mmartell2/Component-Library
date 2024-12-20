import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Badge from './components/badges/Badge'
import Banner from './components/banners/Banner'

function App() {
//
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

      {/* banner section */}
      <section>
        <h1>Banners</h1>
        <Banner 
          status="success"
          title="Success"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        />
        <Banner 
          status="warning"
          title="Warning"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        />
        <Banner 
          status="error"
          title="Error"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        />
        <Banner 
          status="info"
          title="Update Available"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        />
      </section>


      <section>
        <h1>Cards</h1>
      </section>
    </main>
  )
}

export default App
