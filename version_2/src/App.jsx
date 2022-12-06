import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Blog from './components/blog'
import BlogDetails from './components/blog/BlogPost'
import Home from "./pages"

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
    </Routes>
  </Router>
  )
}

export default App
