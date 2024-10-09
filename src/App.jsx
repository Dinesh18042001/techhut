import React from 'react'
import Header from './Component/Header'
import "./App.css"
import CareerPath from './Component/CareerPath'
import Banner from './Component/Banner'
import Career from './Component/Career'
import Mentorship from './Component/Mentorship'
import Companies from './Component/Companies'
import AlumniSay from './Component/AlumniSay'
import Questions from './Component/Questions'
import Footer from './Component/Footer'

export default function App() {
  return (
    <>
        <Header/>
        <Banner/>
        <CareerPath/>
        <Career/>
        <Mentorship/>
        <Companies/>
        <AlumniSay/>
        <Questions/>
        <Footer/>
    </>

  )
}
