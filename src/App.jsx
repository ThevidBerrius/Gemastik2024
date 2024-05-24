import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import SyaratKetenPage from './pages/SyaratKetenPage'
import FaqPage from './pages/FaqPage'
import JobPage from './pages/JobPage'
import DetailPage from './pages/DetailPage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/category' Component={CategoryPage} />
        <Route path='/jobs' Component={JobPage} />
        <Route path='/faq' Component={FaqPage} />
        <Route path='/syaratketen' Component={SyaratKetenPage} />
        <Route path='/detail' Component={DetailPage} />
        <Route path='/login' Component={LoginPage} />
      </Routes>
      <Footer />
    </div>
  );
}



