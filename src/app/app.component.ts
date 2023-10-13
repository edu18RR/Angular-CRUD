import { Component } from '@angular/core';
import { Employee } from './models/employee';  // CRUD services API

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // CRUD services API
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCrud2';
employeeArray: Employee[] = [
  {id: 1, name: "Eduardo", country: "Mexico"},
  {id: 2, name: "Emma", country: "USA"},
  {id: 3, name: "Veronica", country: "Canada"}
  ];

  selectedEmployee: Employee = new Employee();

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }
  addOrEdit() {
    if(this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  delete() {
    if(confirm('¿Estas seguro que quieres elimiarlo?')) {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }
}
