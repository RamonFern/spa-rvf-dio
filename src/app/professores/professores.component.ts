import { Component, OnInit } from '@angular/core';
import { professores } from '../model/professores';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  constructor() { }

  listaProfessores: professores[] = [
    { nome: 'Raimundo', email: 'raimundo@hotmail.com', curso: 'Ciência de Computação'},
    { nome: 'Irenice', email: 'irenice@hotmail.com', curso: 'Redes de Computadores'}
  ];

  displayedColumns: string[] = ['Nome', 'Email', 'Curso'];

  ngOnInit(): void {
  }

}
