


import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus: false,
      }
    }
  })


    return (
      <div className="App">
        <QueryClientProvider client={client}>
 <Router>
<div>
  <Link to='/'>Home</Link>
  <Link to='/profile'>Profile</Link>
  <Link to='/contact '>Contact</Link>
</div>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='*' element={<Error/>}/>
</Routes>
</Router>
</QueryClientProvider>
    </div>
  )
}

export default App