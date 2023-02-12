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

@NgModule({
  declarations: [AppComponent, TableWithSearchComponent, FormDynamicComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
