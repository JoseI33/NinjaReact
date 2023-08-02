import Navbar from "../components/Navbar.jsx"
import { BrowserRouter } from "react-router-dom"


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <h1>Hola Ninjas</h1>
        <h2>Buenas noches</h2>
      </BrowserRouter>
    </>
  )
}

export default App
