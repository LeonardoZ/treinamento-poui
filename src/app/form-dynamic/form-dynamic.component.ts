import { Component } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.css'],
})
export class FormDynamicComponent {
  value: any = {};
  fields: PoDynamicFormField[] = [
    {
      property: 'name',
      required: true,
      gridSmColumns: 12,
      gridMdColumns: 12,
    },
    {
      property: 'amount',
      type: 'number',
      gridSmColumns: 6,
      gridMdColumns: 6,
    },
    {
      property: 'birthday',
      type: 'date',
      gridSmColumns: 6,
      gridMdColumns: 6,
    },
  ];
  onSubmit() {
    alert(JSON.stringify(this.value));
  }
}
