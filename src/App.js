import React from 'react'
import './asset/App.css'
import './asset/style.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import PokeDetail from './components/PokeDetail'

const NoMatchRoute = () => <div>404 Page</div>
const App = () => {
  return (
    <Router>
      <h1 className="main-heading">
        <Link to="/">PokeMon App</Link>
      </h1>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/Pokemon/:pokeId" exact element={<PokeDetail />} />
        <Route element={NoMatchRoute} />
      </Routes>
    </Router>
  )
}

export default App
