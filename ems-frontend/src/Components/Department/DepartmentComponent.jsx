import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createDepartment, getDepartment, updateDepartment } from '../../Service/DepartmentService';

export const DepartmentComponent = () => {
  const { id } = useParams();
  const [departmentName, setDepartmentName] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');
  const [errors, setErrors] = useState(
    {
      departmentName: '',
      departmentDescription: ''
    }
  )

  const navigator = useNavigate()

  const department = { departmentName, departmentDescription };

  useEffect(() => {
    if (id) {
      getDepartment(id).then((response) => {
        setDepartmentName(response.data.departmentName);
        setDepartmentDescription(response.data.departmentDescription);
      }).catch(error => {
        console.log(error);
      });
    }
  }, [id]);

  function savedDepartment(e) {
    e.preventDefault();
    if (validateForm()) {
      createDepartment(department).then((response) => {
        console.log(response.data);
        navigator('/departments');
      }).catch(error => {
        console.log(error);
      });
    }
  }

  function updateDepartmentSelected(e) {
    e.preventDefault();
    if (validateForm()) {
      updateDepartment(id, department).then((response) => {
        console.log(response.data);
        navigator('/departments');
      }).catch(error => {
        console.log(error);
      });
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    errorsCopy.departmentName = departmentName.trim() ? '' : 'Campo obrigatório';
    valid = departmentName.trim() ? valid : false;

    errorsCopy.departmentDescription = departmentDescription.trim() ? '' : 'Campo obrigatório';
    valid = departmentDescription.trim() ? valid : false;

    setErrors(errorsCopy)
    return valid;
  }


  function titlePage() {
    return id ? <h2 className='text-center'>Editar Departamento</h2> : <h2 className='text-center'>Adicionar Departamento</h2>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {titlePage()}
          <div className='card-body'>
            <form>
              <div className='form-group -mb-2'>
                <label className='form-label'>Nome do Departamento:</label>
                <input
                  type="text"
                  placeholder='Digite o nome do Departamento'
                  name='departmentName'
                  value={departmentName}
                  className={`form-control ${errors.departmentName ? 'is-invalid' : ''} `}
                  onChange={(e) => setDepartmentName(e.target.value)}
                />
                {errors.departmentName && <div className='invalid-feedback'>{errors.departmentName}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Descrição do Departamento</label>
                <input
                  type='text'
                  placeholder='Digite a Descrição do Departamento'
                  name='departmentDescription'
                  value={departmentDescription}
                  className={`form-control ${errors.departmentDescription ? 'is-invalid' : ''}`}
                  onChange={(e) => setDepartmentDescription(e.target.value)}
                />
                {errors.departmentDescription && <div className='invalid-feedback'> {errors.departmentDescription}</div>}

              </div>
              <button className='btn btn-success' onClick={id ? updateDepartmentSelected : savedDepartment}>Confirmar</button>


            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
