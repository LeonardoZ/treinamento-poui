import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
})
export class FieldsComponent {
  myForm = new FormGroup({
    cellphone: new FormControl('551499123333'),
    callMeWhen: new FormControl('1'),
    salesOptions: new FormControl('1'),
    availableAt: new FormControl(),
    extraInfo: new FormControl(false),
    budget: new FormControl(0.0),
  });

  radioOptions = [
    { label: 'Manhã', value: '1' },
    { label: 'Tarde', value: '2' },
    { label: 'Noite', value: '3' },
  ];

  salesType = [
    {
      id: 1,
      saleOf: 'Computadores',
    },
    {
      id: 2,
      saleOf: 'Impressoras',
    },
    {
      id: 3,
      saleOf: 'Celulares',
    },
    {
      id: 4,
      saleOf: 'Smartwatches',
    },
  ];

  onSubmit() {
    alert(JSON.stringify(this.myForm.value));
  }
}
