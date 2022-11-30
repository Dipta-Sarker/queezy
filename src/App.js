import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz'


const router = createBrowserRouter([
  {path:'/', element:<Main></Main>, children:[
    {path:'/', 
    loader:() => fetch('https://openapi.programming-hero.com/api/quiz') 
    ,element:<Home></Home>},
    {path:'/quiz/:id', 
    loader: ({ params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
    ,element:<Quiz></Quiz>}
  ]},
  {path:'*', element:<h1>Error: 404 . Page Not Found !!</h1>}
])

function App() {
  
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
