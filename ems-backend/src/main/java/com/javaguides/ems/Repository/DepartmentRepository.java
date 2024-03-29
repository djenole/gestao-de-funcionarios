package com.javaguides.ems.Repository;

import com.javaguides.ems.Entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
