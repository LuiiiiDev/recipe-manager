import { useNavigate } from 'react-router-dom'
import { useRecipes } from '../hooks/useRecipes'
import RecipeForm from '../components/RecipeForm'

const CreateRecipePage = () => {
  const navigate = useNavigate()
  const { createRecipe } = useRecipes()

  const handleSubmit = async (data) => {
    createRecipe(data)
    navigate('/dashboard')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Crear Nueva Receta
        </h1>
        <p className="text-gray-600">
          Agrega una nueva receta a tu colección personal
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-8">
        <RecipeForm 
          onSubmit={handleSubmit}
          submitText="Crear Receta"
        />
      </div>
    </div>
  )
}

export default CreateRecipePage
