import { HashRouter, Route, Routes } from 'react-router-dom'
import BatchTransfer from './pages/batch-transfer'
import Home from './pages/home'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/batch-transfer" element={<BatchTransfer />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
