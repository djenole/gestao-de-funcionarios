import React, {useEffect, useState} from 'react'
import {listEmployees} from '../Service/EmployeeService'

export default function ListEmployeeComponent() {
    
    const [employee, setEmployees] = useState([]);


    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    })
    const dummyData = [
        {
            "id": "1",
            "firstName": "Djenole",
            "lastName": "Silva",
            "email": "email@email.com"
        },

        {
            "id": "2",
            "firstName": "Digenole",
            "lastName": "Souza",
            "email": "outro@email.com"
        },

        {
            "id": "3",
            "firstName": "Silva",
            "lastName": "Souza",
            "email": "teste@email.com"
        },
    ]


    return (
        <div className='container'>
            <h2 className='text-center'>Lista de funcionários</h2>

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
    )
}