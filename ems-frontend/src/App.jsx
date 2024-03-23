
import './App.css'
import { EmployeeComponent } from './Components/EmployeeComponent'
import { FooterComponent } from './Components/FooterComponent'
import { HeaderComponent } from './Components/HeaderComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {


  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path='/' element={<ListEmployeeComponent/>}/>
            <Route path='/employees' element={<ListEmployeeComponent/>}/>
            <Route path='/add-employee' element={<EmployeeComponent/>} />
          </Routes>

        <FooterComponent />

      </BrowserRouter>

    </div>
  )
}

export default App
