import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Skills from './components/Skills'
import ProjectList from './components/ProjectList'
import Test from './components/Test'


function App() {
  return (
    <>
      <Routes>
        {/* ROUTES APP */}
        {/* <Route path='/' element={<Test />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<ProjectList />} />
      </Routes>
    </>
  )
}

export default App
