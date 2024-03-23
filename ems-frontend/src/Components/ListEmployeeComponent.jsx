import React, { useEffect, useState } from 'react'
import { listEmployees } from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom';
export default function ListEmployeeComponent() {

    const [employee, setEmployees] = useState([]);
    
    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    });

    function addNewEmployee() {
        navigator('/add-employee');
    }
    
    return (
        <div className='container'>
            <h2 className='text-center'>Lista de funcionários</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>+ Funcionário</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Primeiro nome</th>
                        <th>Segundo nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map(
                        employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};