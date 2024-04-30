
import './App.css'
import { DepartmentComponent } from './Components/Department/DepartmentComponent'
import { EmployeeComponent } from './Components/Employee/EmployeeComponent'
import { FooterComponent } from './Components/FooterComponent'
import { HeaderComponent } from './Components/HeaderComponent'
import ListDepartmentComponent from './Components/Department/ListDepartmentComponent'
import ListEmployeeComponent from './Components/Employee/ListEmployeeComponent'
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
            <Route path='/edit-employee/:id' element={<EmployeeComponent />}/>

            <Route path='/departments' element={<ListDepartmentComponent/>}/>
            <Route path='/add-department/' element={<DepartmentComponent/>}/>
            <Route path='edit-department/:id' element={<DepartmentComponent/>} />
          </Routes>

        <FooterComponent />

      </BrowserRouter>

    </div>
  )
}

export default App
