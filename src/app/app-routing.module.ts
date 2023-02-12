import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableWithSearchComponent } from './table-with-search/table-with-search.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';

const routes: Routes = [
  {
    path: 'table-with-dynamic-search',
    component: TableWithSearchComponent,
  },
  {
    path: 'form-dynamic',
    component: FormDynamicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
