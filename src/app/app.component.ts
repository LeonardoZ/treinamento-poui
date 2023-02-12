import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/', shortLabel: 'Home', icon: 'po-icon-home' },
    {
      label: 'Notas',
      link: '/notes',
      icon: 'po-icon-news',
      shortLabel: 'Notas',
    },
    {
      label: 'Tabela Simples',
      link: 'table',
      icon: 'po-icon-list',
      shortLabel: 'Tabela S.',
    },
    {
      label: 'Tabela com Busca',
      link: 'table-with-dynamic-search',
      icon: 'po-icon-list',
      shortLabel: 'Tabela Din',
    },
    {
      label: 'Form Dinamico',
      link: 'form-dynamic',
      icon: 'po-icon-edit',
      shortLabel: 'Form',
    },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
