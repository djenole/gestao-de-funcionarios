package com.javaguides.ems.mapper;

import com.javaguides.ems.DTO.DepartmentDTO;
import com.javaguides.ems.Entity.Department;

public class DepartmentMapper {
    public static DepartmentDTO mapperToDepartmentDTO(Department department) {
        return new DepartmentDTO(
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }
    public static Department mapperToDepartment(DepartmentDTO departmentDTO) {
        return new Department(
                departmentDTO.getId(),
                departmentDTO.getDepartmentName(),
                departmentDTO.getDepartmentDescription()
        );
    }
}
