import { Component } from '@angular/core';
import { Employee } from './models/employee';  // CRUD services API

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // CRUD services API
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title(title: any) {
  throw new Error('Method not implemented.');
}
employeeArray: Employee[] = [
  {id: 1, name: "Eduardo", country: "Mexico"},
  {id: 2, name: "Emma", country: "USA"},
  {id: 3, name: "Veronica", country: "Canada"}
  ];
}
