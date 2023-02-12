import { Component } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageDynamicSearchFilters } from '@po-ui/ng-templates';

@Component({
  selector: 'app-table-with-search',
  templateUrl: './table-with-search.component.html',
  styleUrls: ['./table-with-search.component.css'],
})
export class TableWithSearchComponent {
  filters: PoPageDynamicSearchFilters[] = [
    {
      property: 'login',
      label: 'Filtro por Login',
    },
    {
      property: 'name',
      label: 'Filtro por Nome',
    },
  ];

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
      age: 33,
    },
    {
      login: 'cvettorato',
      name: 'Cris',
      age: 33,
    },
  ];

  onAdvancedSearch(params: any) {
    alert(JSON.stringify(params));
  }

  onDisclaimerChanged(params: any) {
    alert(JSON.stringify(params));
  }
}
