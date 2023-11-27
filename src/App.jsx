import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Homescreen from './screen/Homescreen'

function App() {
  const routes = [
    <Route path="/" element={<Homescreen />} />,

  ]


  const router = createBrowserRouter(createRoutesFromElements(routes))


  return (



    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
