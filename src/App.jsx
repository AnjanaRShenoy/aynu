import './App.css'
import CreatePage from './components/createPage'
import ProposalPage from './components/proposalPage'
import { BrowserRouter, Route, Routes } from 'react-router'
import Thankyou from './components/thankyouPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreatePage />} />
        <Route path="/proposal" element={<ProposalPage />} />
        <Route path='/thankyou' element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App