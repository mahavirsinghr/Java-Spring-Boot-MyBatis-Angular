import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListemployeeComponent } from './components/listemployee/listemployee.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import {EmployeeService} from './shared-service/employee.service';

const appRoutes:Routes=[
  {path:'all', component:ListemployeeComponent},
    {path:'update', component:EmployeeFormComponent},
    {path:'updateEmployees', component:EmployeeFormComponent},
    {path:'delete', component:EmployeeFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListemployeeComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
