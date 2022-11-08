import React from 'react'
import './App.css'
import Neweffect from './components/effect/Neweffect'
import Fetchdata from './components/fetchdatafromApi/fetchdata'

import List from './components/list/List'
import MoreList from './components/list/MoreList'
import Planet from './components/list/Planet'
import Home from './components/pages/Home'

import Color from './components/states/Color'
import Counter from './components/states/Counter'
import Input from './components/states/Input'
import Show from './components/states/Show'
import States from './components/states/States'

import Styles from './components/styles/styles'
import Ternary from './components/ternary/Ternary'
import Todolist from './components/Todolist/Todolist'
import { Router, Routes, Route} from 'react-router-dom'
import Profile from './components/pages/Profile'
import Contact from './components/pages/Contact'
import Error from './components/pages/Error'

function App() {
    return (
    <div className="App">
      <Router>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/contact '}>Contact</Link>
        </div>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
