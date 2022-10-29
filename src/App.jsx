import './assets/reset.css'
import './assets/App.css'
import Nav from './components/Nav';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';


function App() {
  return (
    <main>
      <Nav />
      <RouterProvider router={routes} />
    </main>
  )
}

export default App;
