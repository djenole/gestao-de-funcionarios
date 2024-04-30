package com.javaguides.ems.Service.Impl;

import com.javaguides.ems.DTO.EmployeeDTO;
import com.javaguides.ems.Entity.Department;
import com.javaguides.ems.Entity.Employee;
import com.javaguides.ems.Exception.ResourceNotFoundException;
import com.javaguides.ems.Repository.DepartmentRepository;
import com.javaguides.ems.Repository.EmployeeRepository;
import com.javaguides.ems.Service.EmployeeService;
import com.javaguides.ems.mapper.EmployeeMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    private DepartmentRepository departmentRepository;
    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);

        Department department = departmentRepository.findById(employeeDTO.getDepartmentId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Não foi encontrado o id do Departamento. numero do id: " + employeeDTO.getDepartmentId()));
        employee.setDepartment(department);
        Employee savedEmployee = employeeRepository.save(employee);


        return EmployeeMapper.mapToEmployeeDTO(savedEmployee);
    }

    @Override
    public EmployeeDTO getEmployeeId(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
            () -> new ResourceNotFoundException("Funcionário não encontrado por meio de ID"));
    return EmployeeMapper.mapToEmployeeDTO(employee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployee() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(EmployeeMapper::mapToEmployeeDTO)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO updatedEmployee) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
            () -> new ResourceNotFoundException("Funcionário não encontrado por meio de ID: " + employeeId));
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Department department = departmentRepository.findById(updatedEmployee.getDepartmentId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Não foi encontrado o id do Departamento. numero do id: " + updatedEmployee.getDepartmentId()));
        employee.setDepartment(department);
        Employee savedEmployee = employeeRepository.save(employee);

        Employee updatedEmployeeObject = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDTO(updatedEmployeeObject);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
    Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Funcionário não encontrado por meio de ID:" + employeeId));
    employeeRepository.deleteById(employeeId);
    }


}
