import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibiTabela: boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Ramon', idade: 23, email: 'ramon@hotmail.com', curso: 'Ciência de Computação'},
    { nome: 'Sophia', idade: 30, email: 'sophia@hotmail.com', curso: 'Redes de Computadores'},
    { nome: 'Raul', idade: 21, email: 'raul@hotmail.com', curso: 'Mediciana'},
    { nome: 'Adriane', idade: 55, email: 'adriane@hotmail.com', curso: 'Direito'}
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'Email', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibiTabela = true;
  }

}
