import { useForm } from 'react-hook-form'

const RecipeForm = ({ onSubmit, defaultValues, submitText = "Guardar Receta" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="platillo" className="block text-sm font-medium text-gray-700 mb-2">
          Nombre del Platillo *
        </label>
        <input
          type="text"
          id="platillo"
          {...register('platillo', { 
            required: 'El nombre del platillo es obligatorio',
            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
          })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
          placeholder="Ej: Tacos de Carnitas"
        />
        {errors.platillo && (
          <p className="mt-1 text-sm text-red-600">{errors.platillo.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="tiempoPreparacion" className="block text-sm font-medium text-gray-700 mb-2">
          Tiempo de Preparación (minutos) *
        </label>
        <input
          type="number"
          id="tiempoPreparacion"
          min="1"
          {...register('tiempoPreparacion', { 
            required: 'El tiempo de preparación es obligatorio',
            min: { value: 1, message: 'Debe ser mayor a 0 minutos' },
            valueAsNumber: true
          })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
          placeholder="30"
        />
        {errors.tiempoPreparacion && (
          <p className="mt-1 text-sm text-red-600">{errors.tiempoPreparacion.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="ingredientes" className="block text-sm font-medium text-gray-700 mb-2">
          Ingredientes *
        </label>
        <textarea
          id="ingredientes"
          rows={4}
          {...register('ingredientes', { 
            required: 'Los ingredientes son obligatorios',
            minLength: { value: 10, message: 'Mínimo 10 caracteres' }
          })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
          placeholder="Lista todos los ingredientes necesarios..."
        />
        {errors.ingredientes && (
          <p className="mt-1 text-sm text-red-600">{errors.ingredientes.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="instrucciones" className="block text-sm font-medium text-gray-700 mb-2">
          Instrucciones de Preparación *
        </label>
        <textarea
          id="instrucciones"
          rows={6}
          {...register('instrucciones', { 
            required: 'Las instrucciones son obligatorias',
            minLength: { value: 20, message: 'Mínimo 20 caracteres' }
          })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
          placeholder="Describe paso a paso cómo preparar la receta..."
        />
        {errors.instrucciones && (
          <p className="mt-1 text-sm text-red-600">{errors.instrucciones.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Guardando...' : submitText}
      </button>
    </form>
  )
}

export default RecipeForm