import React from 'react'
import Navbar from '../components/Navbar'
import SpecialityMenu from '../components/SpecialityMenu'
import Header from '../components/Header'
import TopDoctors from '../components/TopDoctors'

function Home() {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
    </div>
  )
}

export default Home
