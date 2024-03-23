import React from 'react'
import { useState } from 'react';
export const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    

    

    

    function saveEmployee(e) {
        e.preventDefault();
        const employee = { firstName, lastName, email }
        console.log(employee);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>

                    <h2 className='text-center'>Adicionar Funcionário</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Primeiro Nome:</label>
                                <input
                                    type='text'
                                    placeholder='Digite o primeiro nome'
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Último Nome:</label>
                                <input
                                    type='text'
                                    placeholder='Digite o último nome'
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='text'
                                    placeholder='Digite o email'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' onClick={saveEmployee}>Confirmar</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
