import { Routes, Route } from 'react-router-dom'
import { CreateBlog } from './features/blog/create_blog'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<CreateBlog />}/>
    </Routes>
  )
}

export default App