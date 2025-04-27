import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  standalone: false,
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.scss'
})
export class PaiComponent implements OnInit{

  mensagem: string = '';
  
  constructor() {}
  ngOnInit() {}

  exibirMensagem(msg: string) {
    this.mensagem = msg;
  }
}
