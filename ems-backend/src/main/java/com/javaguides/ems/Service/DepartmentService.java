package com.javaguides.ems.Service;

import com.javaguides.ems.DTO.DepartmentDTO;

import java.util.List;

public interface DepartmentService {
    DepartmentDTO createDepartment(DepartmentDTO departmentDTO);

    DepartmentDTO getDepartmentId(Long departmentId);

    List<DepartmentDTO> getAllDepartments();

    DepartmentDTO updateDepartment(Long departmentId, DepartmentDTO updatedDepartment);

    void deleteDepartment(Long departmentId);


}
