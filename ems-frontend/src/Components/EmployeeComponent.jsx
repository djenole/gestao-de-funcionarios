import React from 'react'
import { useState, useEffect } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../Service/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

export const EmployeeComponent = () => {

    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
        }
    );

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.log(error);
            })
        }

    }, [id])

    function savedOrUpdateEmployee(e) {
        e.preventDefault();
        const employee = { firstName, lastName, email }
        if (validateForm()) {
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees');
            }).catch(error => {
                console.log(error);
            })

        }
    }

    function updateEmployeeSelected(e) {
        e.preventDefault()
        const employee = { firstName, lastName, email }

        if (validateForm()) {
            updateEmployee(id, employee).then((response) => {
                console.log(response.data);
                navigator('/employees');
            }).catch(error => {
                console.log(error);
            })

        }

    }




    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };

        errorsCopy.firstName = firstName.trim() ? '' : 'Campo obrigatório';
        valid = firstName.trim() ? valid : false;

        errorsCopy.lastName = lastName.trim() ? '' : 'Campo obrigatório';
        valid = lastName.trim() ? valid : false;

        errorsCopy.email = email.trim() ? '' : 'Campo obrigatório';
        valid = email.trim() ? valid : false;

        setErrors(errorsCopy);
        return valid;
    }

    function titlePage() {
        return id ? <h2 className='text-center'>Editar Funcionário</h2> : <h2 className='text-center'>Adicionar Funcionário</h2>;
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {titlePage()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Primeiro Nome:</label>
                                <input
                                    type='text'
                                    placeholder='Digite o primeiro nome'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {errors.firstName && <div className='invalid-feedback'> {errors.firstName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Último Nome:</label>
                                <input
                                    type='text'
                                    placeholder='Digite o último nome'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {errors.lastName && <div className='invalid-feedback'> {errors.lastName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='text'
                                    placeholder='Digite o email'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.lastName && <div className='invalid-feedback'> {errors.lastName}</div>}
                            </div>
                            <button className='btn btn-success' onClick={id ? updateEmployeeSelected : savedOrUpdateEmployee}>Confirmar</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
