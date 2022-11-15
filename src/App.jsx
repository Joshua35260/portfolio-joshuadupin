import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Skills from './components/Skills'
import ProjectListclass from './components/ProjectListclass'

function App() {
  return (
    <>
      <Routes>
        {/* ROUTES APP */}

        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<ProjectListclass />} />
      </Routes>
    </>
  )
}

export default App
