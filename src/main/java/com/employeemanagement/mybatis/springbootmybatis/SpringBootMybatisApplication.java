package com.employeemanagement.mybatis.springbootmybatis;

import com.employeemanagement.mybatis.springbootmybatis.model.Employees;
import org.apache.ibatis.type.MappedTypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MappedTypes(Employees.class)
@MapperScan("com.employeemanagement.mybatis.springbootmybatis.mapper")
@SpringBootApplication
public class SpringBootMybatisApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootMybatisApplication.class, args);
	}
}
