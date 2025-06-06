import { Link } from 'react-router-dom'
import { EditIcon, DeleteIcon, ClockIcon } from './Icons'

const RecipeCard = ({ recipe, onDelete }) => {
    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta receta?')) {
            onDelete(recipe.id)
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
                        {recipe.platillo}
                    </h3>
                    <div className="flex items-center space-x-2 ml-4">
                        <Link
                            to={`/edit/${recipe.id}`}
                            className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                            title="Editar receta"
                        >
                            <EditIcon className="h-4 w-4" />
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Eliminar receta"
                        >
                            <DeleteIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{recipe.tiempoPreparacion} minutos</span>
                </div>

                <div className="space-y-4">
                    <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Ingredientes</h4>
                        <p className="text-sm text-gray-600 line-clamp-3">{recipe.ingredientes}</p>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Instrucciones</h4>
                        <p className="text-sm text-gray-600 line-clamp-3">{recipe.instrucciones}</p>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                        to={`/recipe/${recipe.id}`}
                        className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                    >
                        Ver receta completa →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard