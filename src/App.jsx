import { Route, Routes, useLocation } from 'react-router-dom'
import DancingLines from 'react-dancing-lines'
import Home from './screens/Home'
import Test from './screens/test'

function App() {
  return (
    <>
      <DancingLines />
      <Routes>
        {/* ROUTES APP */}
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </>
  )
}

export default App
