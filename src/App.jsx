import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Layout from './layout/Layout';
import Hero from './components/Hero';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route element={<Layout/>}>
       <Route path="/" element={<Hero />}/>
    </Route>
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
