import { useState } from 'react'
import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import AhoraQue from './components/AhoraQue/AhoraQue';
import DolorDeEspalda from './components/DolorDeEspalda/DolorDeEspalda';
import Espondiloartritis from './components/Espondiloartritis/Espondiloartritis';
import Test from './components/Test/Test';


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route element={<Test />} path='/'/>
      <Route element={<DolorDeEspalda />} path='/dolor-de-espalda'/>
      <Route element={<Espondiloartritis />} path='/espondiloartritis-axial'/>
      <Route element={<AhoraQue />} path='/ahora-que'/>
    </Routes>
 
    <Footer />
    </>
  )
}

export default App
