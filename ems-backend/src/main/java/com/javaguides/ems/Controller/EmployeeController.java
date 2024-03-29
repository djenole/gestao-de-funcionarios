package com.javaguides.ems.Controller;

import com.javaguides.ems.DTO.EmployeeDTO;
import com.javaguides.ems.Service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private EmployeeService employeeService;

    //Add employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO) {
        EmployeeDTO savedEmployee = employeeService.createEmployee(employeeDTO);

        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    //Get employee Rest API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable("id") Long employeeId) {
        EmployeeDTO getEmployeeID = employeeService.getEmployeeId(employeeId);

        return ResponseEntity.ok(getEmployeeID);
    }

    //Get all employee Rest API
    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployee() {
        List<EmployeeDTO> employees = employeeService.getAllEmployee();

        return ResponseEntity.ok(employees);
    }

    //Update employee Rest API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id") Long employeeId, @RequestBody EmployeeDTO createdEmployee) {
        EmployeeDTO employeeDTO = employeeService.updateEmployee(employeeId, createdEmployee);

        return ResponseEntity.ok(employeeDTO);
    }

    //Delete employee Rest API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId) {
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Funcionário deletado com sucesso.");
    }

}
