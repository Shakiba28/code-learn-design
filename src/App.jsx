import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Content from './Component/Content'
import AboutUs from './Component/About/AboutUs'
import Posts from './Component/Posts'
import Home from './Component/Home'

function App() {

  return (
    <>
        <Home />
        <Posts />
    </>
  )
}

export default App
