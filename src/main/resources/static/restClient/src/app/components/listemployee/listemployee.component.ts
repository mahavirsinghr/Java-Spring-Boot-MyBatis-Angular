import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../shared-service/employee.service';
import {Employee} from '../../employee';
import{Router} from '@angular/router';
import { Angular5Csv } from '../../../../node_modules/angular5-csv/Angular5-csv';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  private employees:Employee[];
  constructor(private _employeeService:EmployeeService, private _router:Router) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((employees)=>{
      console.log(employees);
      this.employees=employees;
    },(error)=>{
      console.log(error);
    })
  }
  updateEmployee(employee) {
    this._employeeService.setter(employee);
    this._router.navigate(['/updateEmployees'])
  }
  createEmployee() {
    let employee = new Employee();
    this._employeeService.setter(employee);
    this._router.navigate(['/update'])
  }
  deleteEmployee(employee){
    this._employeeService.deleteEmployee(employee).subscribe((data)=>{
      this.employees.splice(this.employees.indexOf(employee),1);
    }, (error) => {
      console.log(error);
    });
  }
}
