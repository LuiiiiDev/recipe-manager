import { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const RecipeContext = createContext()

const API_BASE_URL = 'https://retoolapi.dev/DBFXqn/recetas'

export const useRecipes = () => {
  const context = useContext(RecipeContext)
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider')
  }
  return context
}

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Función para obtener todas las recetas
  const fetchRecipes = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(API_BASE_URL)
      if (!response.ok) {
        throw new Error('Error al obtener las recetas')
      }
      const data = await response.json()
      setRecipes(data.campos || data) // Adaptarse a la estructura de la API
    } catch (err) {
      setError(err.message)
      toast.error('Error al cargar las recetas')
      console.error('Error fetching recipes:', err)
    } finally {
      setLoading(false)
    }
  }

  // Cargar recetas al montar el componente
  useEffect(() => {
    fetchRecipes()
  }, [])

  const createRecipe = async (recipeData) => {
    setLoading(true)
    try {
      const newRecipe = {
        platillo: recipeData.platillo || recipeData.name,
        ingredientes: recipeData.ingredientes || recipeData.ingredients,
        instrucciones: recipeData.instrucciones || recipeData.instructions,
        tiempoPreparacion: recipeData.tiempoPreparacion || recipeData.prepTime || 0
      }

      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe)
      })

      if (!response.ok) {
        throw new Error('Error al crear la receta')
      }

      const createdRecipe = await response.json()
      
      // Actualizar el estado local
      setRecipes(prev => [...prev, createdRecipe])
      toast.success('¡Receta creada exitosamente!')
      return createdRecipe
    } catch (err) {
      setError(err.message)
      toast.error('Error al crear la receta')
      console.error('Error creating recipe:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const updateRecipe = async (id, recipeData) => {
    setLoading(true)
    try {
      const updatedRecipe = {
        platillo: recipeData.platillo || recipeData.name,
        ingredientes: recipeData.ingredientes || recipeData.ingredients,
        instrucciones: recipeData.instrucciones || recipeData.instructions,
        tiempoPreparacion: recipeData.tiempoPreparacion || recipeData.prepTime || 0
      }

      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRecipe)
      })

      if (!response.ok) {
        throw new Error('Error al actualizar la receta')
      }

      const updated = await response.json()
      
      // Actualizar el estado local
      setRecipes(prev => prev.map(recipe => 
        recipe.id === parseInt(id) ? updated : recipe
      ))
      toast.success('¡Receta actualizada exitosamente!')
      return updated
    } catch (err) {
      setError(err.message)
      toast.error('Error al actualizar la receta')
      console.error('Error updating recipe:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const deleteRecipe = async (id) => {
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Error al eliminar la receta')
      }

      // Actualizar el estado local
      setRecipes(prev => prev.filter(recipe => recipe.id !== parseInt(id)))
      toast.success('¡Receta eliminada exitosamente!')
    } catch (err) {
      setError(err.message)
      toast.error('Error al eliminar la receta')
      console.error('Error deleting recipe:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const getRecipeById = (id) => {
    return recipes.find(recipe => recipe.id === parseInt(id))
  }

  // Función para refrescar las recetas manualmente
  const refreshRecipes = () => {
    fetchRecipes()
  }

  return (
    <RecipeContext.Provider value={{
      recipes,
      loading,
      error,
      createRecipe,
      updateRecipe,
      deleteRecipe,
      getRecipeById,
      refreshRecipes
    }}>
      {children}
    </RecipeContext.Provider>
  )
}