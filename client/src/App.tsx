import {   RouterProvider,  createBrowserRouter } from 'react-router-dom'
import  { Suspense, lazy } from 'react'

 
const Home = lazy(()=> import('./pages/home/Home')) 
import "./App.scss"
const Tv = lazy(()=> import('./pages/tv/Tv')) 
const Movies = lazy(()=> import('./pages/movies/Movies')) 
const Popular = lazy(()=> import('./pages/popular/Popular')) 
const List = lazy(()=> import('./pages/list/List'))  
const  Login = lazy(()=> import('./pages/login/Login')) 
const Register = lazy(()=> import('./pages/register/Register')) 

import Loading from './components/loading/Loading'
import Watch from './pages/watch/Watch'
const Movie = lazy(()=> import('./pages/movie/Movie')) 
const Search = lazy(()=> import('./pages/search/Search')) 

function App() {
  
 const router = createBrowserRouter([
  {
        path:"/",
        element:<Suspense fallback={<Loading/>}><Home/></Suspense>,
        
      },
      {
        path:"/login",
        element:<Suspense fallback={<Loading/>}><Login/></Suspense>,
      
      },
      
      {
        path:"/tv",
        element:<Suspense fallback={<Loading/>}><Tv/></Suspense>,
       
       
      },
      {
        path:"/movies",
        element:<Suspense fallback={<Loading/>}><Movies/></Suspense>,
       
      },
      {
        path:"/new",
        element:<Suspense fallback={<Loading/>}><Popular/></Suspense>,
       
      },
      {
        path:"/list",
        element:<Suspense fallback={<Loading/>}><List/></Suspense>,
       
      },
      {
        path:"/register",
        element:<Suspense fallback={<Loading/>}><Register/></Suspense>,
       
      },
      {
        path:"/search",
        element:<Suspense fallback={<Loading/>}><Search/></Suspense>,
      },
     
      
      {
        path:"/watch/:id",
        element:<Suspense fallback={<Loading/>}><Watch/></Suspense>
      },
      {
        path:"*",
        element:<p>404 Error - Nothing here...</p>
    }
    
    ])
  
  

  


  return (
   
    <RouterProvider router={router} />
  )
}


export default App
