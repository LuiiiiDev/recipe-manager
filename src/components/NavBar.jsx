import { Link, useLocation } from 'react-router-dom'
import { ChefHatIcon, HomeIcon, PlusIcon } from './Icons'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-orange-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <ChefHatIcon className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">RecetApp</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/dashboard')
                  ? 'bg-orange-100 text-orange-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <HomeIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/create"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/create')
                  ? 'bg-orange-100 text-orange-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <PlusIcon className="h-5 w-5" />
              <span>Nueva Receta</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
