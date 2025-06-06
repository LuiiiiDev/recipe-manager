import { Link } from 'react-router-dom'
import { useRecipes } from '../hooks/useRecipes'
import RecipeCard from '../components/RecipeCard'
import { PlusIcon, ChefHatIcon } from '../components/Icons'

const HomePage = () => {
  const { recipes, deleteRecipe } = useRecipes()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard de Recetas
            </h1>
            <p className="text-gray-600">
              Gestiona tu colección personal de recetas del Chef Ricardo
            </p>
          </div>
          
          <Link
            to="/create"
            className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Nueva Receta</span>
          </Link>
        </div>
      </div>

      {recipes.length === 0 ? (
        <div className="text-center py-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-orange-100 rounded-full">
              <ChefHatIcon className="h-16 w-16 text-orange-300" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            No tienes recetas aún
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            ¡Empieza creando tu primera receta! Organiza todas las deliciosas 
            recetas del Chef Ricardo en un solo lugar.
          </p>
          <Link
            to="/create"
            className="inline-flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transform hover:scale-105 transition-all duration-200"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Crear Primera Receta</span>
          </Link>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              {recipes.length} {recipes.length === 1 ? 'receta' : 'recetas'} en tu colección
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onDelete={deleteRecipe}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
