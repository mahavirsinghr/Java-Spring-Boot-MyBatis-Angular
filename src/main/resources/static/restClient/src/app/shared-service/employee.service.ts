import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Employee } from '../employee';

@Injectable()
export class EmployeeService {

  private baseUrl:string="http://localhost:9095/rest/employees";
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private employee:Employee;
  constructor(private _http: Http) { }

  getEmployees() {
    return this._http.get(this.baseUrl+'/all').map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  getEmployee(id:Number){
    return this._http.get(this.baseUrl+'/'+id).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createEmployee(employee:Employee) {
    return this._http.put(this.baseUrl+'/update', JSON.stringify(employee), this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  updateEmployee(employee:Employee) {
    return this._http.put(this.baseUrl+'/updateEmployees', JSON.stringify(employee), this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  deleteEmployee(id:Number){
    return this._http.delete(this.baseUrl+'/delete'+id).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
  }

  setter(employee:Employee){
    this.employee=employee;
  }
  getter(){
    return this.employee;
  }
}
