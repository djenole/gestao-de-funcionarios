package com.javaguides.ems.mapper;

import com.javaguides.ems.DTO.EmployeeDTO;
import com.javaguides.ems.Entity.Employee;

public class EmployeeMapper {
    public static Employee mapToEmployee(EmployeeDTO employeeDTO) {
        Employee employee =  new Employee();
            employee.setId(employeeDTO.getId());
            employee.setFirstName(employeeDTO.getFirstName());
            employee.setLastName(employeeDTO.getLastName());
            employee.setEmail(employeeDTO.getEmail());
            return employee;

    }

    public static EmployeeDTO mapToEmployeeDTO(Employee employee) {
        return new EmployeeDTO(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getDepartment() != null ? employee.getDepartment().getId() : null

        );
    }

}
