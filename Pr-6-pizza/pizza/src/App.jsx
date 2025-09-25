import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './assets/component/shop details/banner'
import Menu from './assets/component/shop details/card/menu'
import DescriptionTabs from './assets/component/shop details/card/DescriptionTabs'
import Shrimp from './assets/component/Shrimp'
import Header from './assets/component/Header';
import Footer from './assets/component/Footer';


function App() {
  
  return (
    <>
      <Header />
      <Banner />
      <Shrimp />
         <DescriptionTabs />
      <Menu />
      <Footer />
   
    </>
  )
}

export default App
