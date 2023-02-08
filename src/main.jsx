import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './index.css'
import ErrorPage from './pages/ErrorPage';
import GetAxios from './components/GetAxios';
import Contato from './pages/Contato';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <h3>Página Home</h3>,
      },
      {
        path: "/contato",
        element:<Contato/>,
      },
      {
        path: "/tarefas",
        element:<GetAxios/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
