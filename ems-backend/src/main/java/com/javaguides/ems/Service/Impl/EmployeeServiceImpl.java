package com.javaguides.ems.Service.Impl;

import com.javaguides.ems.DTO.EmployeeDTO;
import com.javaguides.ems.Entity.Employee;
import com.javaguides.ems.Exception.ResourceNotFoundException;
import com.javaguides.ems.Repository.EmployeeRepository;
import com.javaguides.ems.Service.EmployeeService;
import com.javaguides.ems.mapper.EmployeeMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDTO(savedEmployee);

    }
    @Override
    public EmployeeDTO getEmployeeId(Long employeeId) {
       Employee employee = employeeRepository.findById(employeeId)
        .orElseThrow(() -> new ResourceNotFoundException("Funcionário não encontrado por meio de ID"));
    
    return EmployeeMapper.mapToEmployeeDTO(employee);
    }
   
}
