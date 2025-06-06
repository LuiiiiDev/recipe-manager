// src/pages/EditRecipePage.jsx
import { useNavigate, useParams } from 'react-router-dom'
import { useRecipes } from '../hooks/useRecipes'
import RecipeForm from '../components/RecipeForm'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const EditRecipePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { updateRecipe, getRecipeById } = useRecipes()
  
  const recipe = getRecipeById(id)

  useEffect(() => {
    if (!recipe) {
      toast.error('Receta no encontrada')
      navigate('/dashboard')
    }
  }, [recipe, navigate])

  const handleSubmit = async (data) => {
    updateRecipe(id, data)
    navigate('/dashboard')
  }

  if (!recipe) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Editar Receta: {recipe.platillo}
        </h1>
        <p className="text-gray-600">
          Modifica los detalles de tu receta
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-8">
        <RecipeForm 
          onSubmit={handleSubmit}
          defaultValues={recipe}
          submitText="Actualizar Receta"
        />
      </div>
    </div>
  )
}

export default EditRecipePage