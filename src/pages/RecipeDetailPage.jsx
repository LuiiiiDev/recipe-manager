import { useParams, useNavigate, Link } from 'react-router-dom'
import { useRecipes } from '../hooks/useRecipes'
import { ClockIcon, EditIcon, DeleteIcon, ArrowLeftIcon } from '../components/Icons'

const RecipeDetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { getRecipeById, deleteRecipe } = useRecipes()
    
    const recipe = getRecipeById(id)
    
    if (!recipe) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8">
                <p className="text-center text-gray-600">Receta no encontrada</p>
                <div className="text-center mt-4">
                    <Link 
                        to="/dashboard" 
                        className="text-orange-600 hover:text-orange-700"
                    >
                        Volver al dashboard
                    </Link>
                </div>
            </div>
        )
    }

    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta receta?')) {
            deleteRecipe(recipe.id)
            navigate('/dashboard')
        }
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header con botón de volver */}
            <div className="mb-8">
                <Link 
                    to="/dashboard" 
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
                >
                    <ArrowLeftIcon className="h-4 w-4 mr-2" />
                    Volver al dashboard
                </Link>
                
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-3">
                            {recipe.platillo}
                        </h1>
                        <div className="flex items-center text-lg text-gray-600">
                            <ClockIcon className="h-5 w-5 mr-2" />
                            <span>{recipe.tiempoPreparacion} minutos de preparación</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                        <Link
                            to={`/edit/${recipe.id}`}
                            className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
                        >
                            <EditIcon className="h-4 w-4 mr-2" />
                            Editar
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                        >
                            <DeleteIcon className="h-4 w-4 mr-2" />
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Ingredientes */}
                <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Ingredientes
                    </h2>
                    <div className="prose prose-gray">
                        <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                            {recipe.ingredientes}
                        </p>
                    </div>
                </div>

                {/* Instrucciones */}
                <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Instrucciones
                    </h2>
                    <div className="prose prose-gray">
                        <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                            {recipe.instrucciones}
                        </p>
                    </div>
                </div>
            </div>

            {/* Información adicional */}
            <div className="mt-8 bg-orange-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Consejos del Chef Ricardo
                </h3>
                <p className="text-gray-700">
                    Recuerda que puedes ajustar las cantidades según el número de porciones que necesites. 
                    Los tiempos de cocción pueden variar según tu equipo de cocina. ¡No tengas miedo de 
                    experimentar y agregar tu toque personal!
                </p>
            </div>

            {/* Fecha de creación */}
            {recipe.createdAt && (
                <div className="mt-4 text-center text-sm text-gray-500">
                    Receta creada el {new Date(recipe.createdAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
            )}
        </div>
    )
}

export default RecipeDetailPage