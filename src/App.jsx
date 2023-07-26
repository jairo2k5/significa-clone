import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const menu = true
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
