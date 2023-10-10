import { Link, Route, Routes } from 'react-router-dom'
import GamersPage from './pages/GamersPage'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/gamers'>Gamers</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/gamers' element={<GamersPage />} />

        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </>
  )
}

export default App
