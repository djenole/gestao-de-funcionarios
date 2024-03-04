package com.javaguides.ems.mapper;

import com.javaguides.ems.DTO.EmployeeDTO;
import com.javaguides.ems.Entity.Employee;

public class EmployeeMapper {
    public static Employee mapToEmployeeDTO(Employee employee) {
        return new Employee(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static EmployeeDTO mapToEmployee(EmployeeDTO employeeDTO) {
        return new EmployeeDTO(
                employeeDTO.getId(),
                employeeDTO.getFirstName(),
                employeeDTO.getLastName(),
                employeeDTO.getEmail()
        );
    }

}
