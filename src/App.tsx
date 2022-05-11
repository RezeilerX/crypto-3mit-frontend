import type { FunctionComponent } from 'react'
import Header from 'components/templates/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from 'components/pages/Home'
import Portfolio from 'components/pages/Portfolio'

const App: FunctionComponent = () => (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio' element={<Portfolio />}  />
      </Routes>
    </Router>
  </>
)

export default App
