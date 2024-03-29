import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteDepartment, listDepartment } from '../Service/DepartmentService';


export default function ListDepartmentComponent() {
    const [department, setDepartment] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        getAllDepartment();
    })

    function getAllDepartment() {
        listDepartment().then((response) => {
            setDepartment(response.data);
        }).catch(error => {
            console.log(error)
        });
    }


    function addNewDepartment() {
        navigator(`/add-department`);
    }

    function updateDepartment(id) {
        navigator(`/edit-department/${id}`);
    }

    function removeDepartment(id) {
        deleteDepartment(id).then((response) => {
            getAllDepartment();
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <div className='container'>
            <h2 className='text-center'>Lista de Departamento</h2>
            <button className='btn btn-primary mb-2' onClick={addNewDepartment}>+ Departamento</button>

            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Departamento</th>
                        <th>Descrição do Departamento</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {department.map(
                        department =>
                            <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.departmentName}</td>
                                <td>{department.departmentDescription}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateDepartment(department.id)}>Editar</button>
                                    <button className='btn btn-danger' onClick={() => removeDepartment(department.id)}>Deletar</button>
                                </td>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
