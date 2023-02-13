import { Component } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.css'],
})
export class FormDynamicComponent {
  value: any = {
    cellphone: '551499123333',
    callMeWhen: 1,
    salesOptions: 1,
    extraInfo: false,
    budget: 0.0,
  };

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

  newFields: PoDynamicFormField[] = [
    {
      property: 'cellphone',
      type: 'string',
      label: 'Celular',
      mask: '(+99) (99) 99999?-9999',
      maskFormatModel: true,
      gridSmColumns: 12,
      gridColumns: 6,
      clean: true,
    },
    {
      property: 'salesOptions',
      fieldLabel: 'saleOf',
      fieldValue: 'id',
      label: 'Escolha o tipo de contato de vendas que quer receber',
      options: this.salesType,
      gridSmColumns: 12,
      gridColumns: 6,
    },
    {
      property: 'callMeWhen',
      options: this.radioOptions,
      label: 'Informe o período',
      columns: 3,
      gridColumns: 12,
    },
    {
      property: 'availableAt',
      type: 'date',
      label: 'Em qual dia?',
      gridSmColumns: 12,
      gridColumns: 6,
    },
    {
      property: 'extraInfo',
      type: 'boolean',
      booleanTrue: 'Considerar coleta de informações extras',
      booleanFalse: 'Não considerar coleta de informações extras',
      label: 'Informações extras na call',
      gridSmColumns: 12,
      gridColumns: 6,
    },
    {
      property: 'budget',
      type: 'currency',
      maxValue: 100000,
      label: 'Qual o orçamento estimado?',
      help: 'Valor',
      gridColumns: 12,
    },
  ];

  onSubmit() {
    alert(JSON.stringify(this.value));
  }
}
