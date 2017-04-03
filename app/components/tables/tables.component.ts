import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-table',
  templateUrl: 'tables.component.html'
})
export class TablesComponent {
  head = {
    title: 'Title',
    first_name: 'First Name',
    last_name: 'Last Name',
    address: 'Address',
    city: 'City',
    zip_code: 'Zip Code',
    age: 'Age'
  };
  data = [{
    title: 'CSS/JS Jedi',
    first_name: 'Jason',
    last_name: 'Jacobson',
    address: '10924 Magnolia Street',
    city: 'Coon Rapids',
    zip_code: '55448',
    age: '32'
  }, {
    title: 'CSS/JS Jedi',
    first_name: 'Jason',
    last_name: 'Jacobson',
    address: '10924 Magnolia Street',
    city: 'Coon Rapids',
    zip_code: '55448',
    age: '32'
  }, {
    title: 'CSS/JS Jedi',
    first_name: 'Jason',
    last_name: 'Jacobson',
    address: '10924 Magnolia Street',
    city: 'Coon Rapids',
    zip_code: '55448',
    age: '32'
  }];
}
