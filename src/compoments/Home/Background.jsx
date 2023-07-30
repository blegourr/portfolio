import { useState } from 'react'
import './Background.css'
import back from '../assets/svg/background.svg'
import back1 from '../assets/svg/background1.svg'

function Home() {

  return (
      <div className='background'>
        <img src={back} alt="" />
        <img src={back1} alt="" />
      </div>
  )
}

export default Home
