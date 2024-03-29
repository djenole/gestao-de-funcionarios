package com.javaguides.ems.Service.Impl;

import com.javaguides.ems.DTO.DepartmentDTO;
import com.javaguides.ems.Entity.Department;
import com.javaguides.ems.Exception.ResourceNotFoundException;
import com.javaguides.ems.Repository.DepartmentRepository;
import com.javaguides.ems.Service.DepartmentService;
import com.javaguides.ems.mapper.DepartmentMapper;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDTO createDepartment(DepartmentDTO departmentDTO) {
        Department department = DepartmentMapper.mapperToDepartment(departmentDTO);
        Department savedDepartment = departmentRepository.save(department);

        return DepartmentMapper.mapperToDepartmentDTO(savedDepartment);
    }

    @Override
    public DepartmentDTO getDepartmentId(Long departmentId) {
        Department department = departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Departamento não encontrado por meio de ID"));
        return DepartmentMapper.mapperToDepartmentDTO(department);
    }

    @Override
    public List<DepartmentDTO> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map((department) -> DepartmentMapper.mapperToDepartmentDTO(department))
                .collect(Collectors.toList());
    }

    @Override
    public DepartmentDTO updateDepartment(Long departmentId, DepartmentDTO updateDepartment) {
        Department department = departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Departamento não encontrado por meio de ID: "+ departmentId));

        department.setDepartmentName(updateDepartment.getDepartmentName());
        department.setDepartmentDescription(updateDepartment.getDepartmentDescription());

        Department updateDepartmentObject = departmentRepository.save(department);
        return DepartmentMapper.mapperToDepartmentDTO(updateDepartmentObject);
    }

    @Override
    public void deleteDepartment(Long departmentId) {
      Department department = departmentRepository.findById(departmentId).orElseThrow(
              () -> new ResourceNotFoundException("Departamento não encontrado por meio de ID: " + departmentId));
      departmentRepository.deleteById(departmentId);
    }
}
