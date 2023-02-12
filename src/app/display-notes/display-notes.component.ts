import { Component } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css'],
})
export class DisplayNotesComponent {
  notes = [
    {
      title: 'Acordar cedo',
      about: 'Lembrar que tenho que acordas 6h30AM',
    },
    {
      title: 'Bater ponto',
      about: 'Bater o ponto até 07h05',
      relevant: true,
    },
    {
      title: 'Pausa para o almoço',
      about: 'Almoçar com calma é importante. Coma devagar!',
      relevant: true,
    },
    {
      title: 'Apontar minhas horas',
      about: 'Apontas minhar horas nos projetos que atuei',
    },
    {
      title: 'Bater ponto de saída',
      about: 'Bater ponto para encerrar o expediente',
      relevant: true,
    },
  ];
}
