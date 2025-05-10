import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import './index.css'
import Hero from './Pages/Extra/Hero';
import HeroDetail from "./Pages/Extra/HeroDetail"

function App() {

  return (
    <Routes>
      <Route path="/blog" element={<LandingPage />}>
        <Route index element={<Hero />} />
        <Route path="/blog/:id" element={<HeroDetail />} />
      </Route>
    </Routes>
  );
}

export default App
