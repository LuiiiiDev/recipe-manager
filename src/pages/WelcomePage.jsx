import { Link } from 'react-router-dom'
import { ChefHatIcon, BookOpenIcon } from '../components/Icons'

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-orange-100 rounded-full">
              <ChefHatIcon className="h-16 w-16 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Bienvenido a <span className="text-orange-600">RecetApp</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            El lugar perfecto para organizar y compartir tus recetas favoritas del Chef Ricardo
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center mb-4">
            <BookOpenIcon className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">
              ¡Empieza tu aventura culinaria!
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Crea, organiza y gestiona todas tus recetas en un solo lugar. 
            Desde entrantes hasta postres, mantén tu colección siempre al alcance.
          </p>
          
          <Link
            to="/dashboard"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Ir al Dashboard
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-2">📝</div>
            <h3 className="font-semibold text-gray-900 mb-2">Crear Recetas</h3>
            <p className="text-gray-600 text-sm">Registra fácilmente nuevas recetas con ingredientes e instrucciones</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold text-gray-900 mb-2">Organizar</h3>
            <p className="text-gray-600 text-sm">Mantén todas tus recetas organizadas y fáciles de encontrar</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-2">⏱️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Planificar</h3>
            <p className="text-gray-600 text-sm">Conoce los tiempos de preparación para planificar tus comidas</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage