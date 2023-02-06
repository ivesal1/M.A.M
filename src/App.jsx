import './assets/reset.css'
import './assets/App.css'
import Layout from './layouts/Layout';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <main>
      <Layout />
      <Toaster/>
    </main>
  )
}

export default App;
