package com.employeemanagement.mybatis.springbootmybatis.resource;

import com.employeemanagement.mybatis.springbootmybatis.mapper.EmployeesMapper;
import com.employeemanagement.mybatis.springbootmybatis.model.Employees;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/employees")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class EmployeesResource {

    private EmployeesMapper employeesMapper;

    public EmployeesResource(EmployeesMapper employeesMapper) {
        this.employeesMapper = employeesMapper;
    }

    @GetMapping("/all")
    public List<Employees> getAll() {
        return employeesMapper.findAll();
    }

    @GetMapping("/update")
    private List<Employees> delete() {

        Employees employees = new Employees();
        employees.setName("Neha");

        employeesMapper.insert(employees);
        return employeesMapper.findAll();
    }

    @GetMapping("/updateEmployees")
    private List<Employees> updateEmployees() {

        Employees employees = new Employees();
        employees.setName("Neha");
        employees.setPhone(1214429999);
        employees.setEmail("nsingh@gmail.com");

        employeesMapper.update(employees);
        return employeesMapper.findAll();
    }

    @GetMapping("/delete")
    private List<Employees> update() {

        Employees employees = new Employees();
        employees.setName("Mahavir");
        employeesMapper.delete(employees);
        return employeesMapper.findAll();
    }
}
