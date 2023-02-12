import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/' },
    { label: 'Notes', link: '/notes' },
    { label: 'Tabela com Busca', link: 'table-with-dynamic-search' },
    { label: 'Form Dinamico', link: 'form-dynamic' },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
