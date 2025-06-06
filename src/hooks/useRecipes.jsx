import { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const RecipeContext = createContext()

export const useRecipes = () => {
  const context = useContext(RecipeContext)
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider')
  }
  return context
}

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('recipes')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])

  const createRecipe = (recipeData) => {
    const newRecipe = {
      id: Date.now(),
      ...recipeData,
      createdAt: new Date().toISOString()
    }
    setRecipes(prev => [...prev, newRecipe])
    toast.success('¡Receta creada exitosamente!')
    return newRecipe
  }

  const updateRecipe = (id, recipeData) => {
    setRecipes(prev => prev.map(recipe => 
      recipe.id === parseInt(id) 
        ? { ...recipe, ...recipeData, updatedAt: new Date().toISOString() }
        : recipe
    ))
    toast.success('¡Receta actualizada exitosamente!')
  }

  const deleteRecipe = (id) => {
    setRecipes(prev => prev.filter(recipe => recipe.id !== id))
    toast.success('¡Receta eliminada exitosamente!')
  }

  const getRecipeById = (id) => {
    return recipes.find(recipe => recipe.id === parseInt(id))
  }

  return (
    <RecipeContext.Provider value={{
      recipes,
      createRecipe,
      updateRecipe,
      deleteRecipe,
      getRecipeById
    }}>
      {children}
    </RecipeContext.Provider>
  )
}
