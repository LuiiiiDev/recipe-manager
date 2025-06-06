import { Routes, Route } from 'react-router-dom'
import { RecipeProvider } from './hooks/useRecipes'
import Layout from './components/Layout'
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import CreateRecipePage from './pages/CreateRecipePage'
import EditRecipePage from './pages/EditRecipePage.jsx'
import RecipeDetailPage from './pages/RecipeDetailPage'

function App() {
  return (
    <RecipeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/create" element={<CreateRecipePage />} />
          <Route path="/edit/:id" element={<EditRecipePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        </Routes>
      </Layout>
    </RecipeProvider>
  )
}

export default App