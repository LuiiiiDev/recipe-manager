import { useLocation } from 'react-router-dom'
import Navbar from './NavBar'

const Layout = ({ children }) => {
  const location = useLocation()
  const isWelcomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {!isWelcomePage && <Navbar />}
      <main className={isWelcomePage ? '' : 'pt-16'}>
        {children}
      </main>
    </div>
  )
}

export default Layout
