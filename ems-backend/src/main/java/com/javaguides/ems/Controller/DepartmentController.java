package com.javaguides.ems.Controller;

import com.javaguides.ems.DTO.DepartmentDTO;
import com.javaguides.ems.Service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    DepartmentService departmentService;
    @PostMapping
    public ResponseEntity<DepartmentDTO> createDepartment(@RequestBody DepartmentDTO departmentDTO) {
        DepartmentDTO department = departmentService.createDepartment(departmentDTO);

        return new ResponseEntity<>(department, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<DepartmentDTO> getDepartmentById(@PathVariable("id") Long departmentId) {
        DepartmentDTO getDepartmentID = departmentService.getDepartmentId(departmentId);

        return ResponseEntity.ok(getDepartmentID);
    }

    @GetMapping
    public ResponseEntity<List<DepartmentDTO>> getAllDepartment() {
        List<DepartmentDTO> departments = departmentService.getAllDepartments();

        return ResponseEntity.ok(departments);
    }

    @PutMapping("{id}")
    public ResponseEntity<DepartmentDTO> updateDepartment(@PathVariable("id") Long departmentId, @RequestBody DepartmentDTO createdDepartment) {
       DepartmentDTO departmentDTO = departmentService.updateDepartment(departmentId, createdDepartment);

       return ResponseEntity.ok(departmentDTO);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDepartment(@PathVariable("id") Long departmentId) {
        departmentService.deleteDepartment(departmentId);

        return ResponseEntity.ok("Departamento deletado com sucesso.");
    }
}
