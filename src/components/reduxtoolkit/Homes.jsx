import { useDispatch, useSelector } from "react-redux";

const Homes = () => {
    const username = useSelector((state) => state.user.value.username)
    return(
        <div>Homes{username}</div>
    )
}
export default Homes


// import Homes from './components/reduxtoolkit/Homes'
// import Login from './components/reduxtoolkit/Login'
// import Contacts from './components/reduxtoolkit/Contacts'
// import { Provider } from 'react-redux'
// import  {store}  from './components/reduxtoolkit/Store'

// function App() {
 
//     return (
//       <div className="App">
//         <Provider store={store}>
//         <Router>
//           <Link to='/'>Home</Link>
//           <Link to='/login'>Login</Link>
//           <Link to='/contacts'>Contacts</Link>
//           <Routes>
//             <Route path='/' element={<Homes/>}/>
//             <Route path='/login' element={<Login/>}/>
//             <Route path='/contacts' element={<Contacts/>}/>
//           </Routes>
//         </Router>
//         </Provider>
   
//     </div>
//   )
// }