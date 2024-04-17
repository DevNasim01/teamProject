import React from 'react'
import Nav from './components/Nav'
import Bg from './components/Bg'


const App = () => {
  return (
    <>
    <img className='fixed top-0 -z-20 h-dvh w-full object-cover' src="img.jpg" alt="" />
    <div className='h-dvh'>
        
        <Nav />
        <Bg />
    </div>
    
    </>
  )
}

export default App