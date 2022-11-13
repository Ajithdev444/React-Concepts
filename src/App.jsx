import React, { useState, createContext } from 'react'
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
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom'
import Profile from './components/pages/Profile'
import Contact from './components/pages/Contact'
import Error from './components/pages/Error'
import DataFetch from './components/fetchdatafromApi/DataFetch'
import StateManagement from './components/context/StateManagement'
import Form from './components/form/Form'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CustomHook from './components/customhook/CustomHook'
import FetchCat  from './components/customhook/FetchCat'
import Counters from './components/customhook/Counters'
import Person from './components/typeSafety/Person'
import Homes from './components/reduxtoolkit/Homes'
import Login from './components/reduxtoolkit/Login'
import Contacts from './components/reduxtoolkit/Contacts'
import { Provider } from 'react-redux'
import  {store}  from './components/reduxtoolkit/Store'

function App() {
 
    return (
      <div className="App">
        <Provider store={store}>
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/contacts'>Contacts</Link>
          <Routes>
            <Route path='/' element={<Homes/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
        </Router>
        </Provider>
   
    </div>
  )
}

export default App