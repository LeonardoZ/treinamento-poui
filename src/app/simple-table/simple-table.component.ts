import { Component } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css'],
})
export class SimpleTableComponent {
  columns: PoTableColumn[] = [
    {
      label: 'Login',
      property: 'login',
      type: 'string',
    },
    {
      label: 'Nome',
      property: 'name',
      type: 'string',
    },
    {
      label: 'Idade',
      property: 'age',
      type: 'string',
    },
  ];
  data = [
    {
      login: 'lzapparoli',
      name: 'Leonardo',
      age: 30,
    },
    {
      login: 'pcesario',
      name: 'Paulo Cesário',
      age: 33,
    },
    {
      login: 'eemoreira',
      name: 'Emerson',
      age: 16,
    },
    {
      login: 'cvettorato',
      name: 'Cris',
      age: 33,
    },
  ];
}
