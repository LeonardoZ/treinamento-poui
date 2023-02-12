import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { TableWithSearchComponent } from './table-with-search/table-with-search.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { FieldsComponent } from './fields/fields.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableWithSearchComponent,
    FormDynamicComponent,
    DisplayNotesComponent,
    SimpleTableComponent,
    FieldsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
