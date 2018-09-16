package com.employeemanagement.mybatis.springbootmybatis.mapper;

import com.employeemanagement.mybatis.springbootmybatis.model.Employees;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface EmployeesMapper {

    @Select("select * from test.employees")
    List<Employees> findAll();

    @Insert("insert into employees(name, phone, email) values(#{name}, #{phone}, #{email})")
    @SelectKey(statement = "SELECT LAST_INSERT_ID()", keyProperty = "id",
    before = false, resultType = Integer.class)

    void insert(Employees employees);

    @Update("update employees set phone=#{phone}, email=#{email} where name=#{name}")
    void update(Employees employees);

    @Delete("delete from employees where name=#{name}")
    void delete(Employees employees);
}
