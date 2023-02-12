import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableWithSearchComponent } from './table-with-search/table-with-search.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';

const routes: Routes = [
  {
    path: 'notes',
    component: DisplayNotesComponent,
  },
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
