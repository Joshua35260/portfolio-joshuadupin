import { Route, Routes } from 'react-router-dom'
import Services from './components/Knowledges'
import Home from './screens/Home'

function App() {
  return (
    <>
      <Routes>
        {/* ROUTES APP */}
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
