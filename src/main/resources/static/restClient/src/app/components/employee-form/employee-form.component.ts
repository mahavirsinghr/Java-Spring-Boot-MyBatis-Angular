import { Component, OnInit } from '@angular/core';
import {Employee} from '../../employee';
import{Router} from '@angular/router';
import {EmployeeService} from '../../shared-service/employee.service';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  private employee:Employee;
  constructor(private _employeeService:EmployeeService, private _router:Router) { }

  ngOnInit() {
    this.employee=this._employeeService.getter()
  }

  processForm(){
    if(this.employee.id==undefined){
      this._employeeService.createEmployee(this.employee).subscribe((employee)=>{
        console.log(employee); 
        this._router.navigate(['/update'])
      },(error)=>{
        console.log(error);
      });
    }
    else{
      this._employeeService.updateEmployee(this.employee).subscribe((employee)=>{
        console.log(employee); 
        this._router.navigate(['/updateEmployees'])
      },(error)=>{
        console.log(error);
      });
    }
  }
}
