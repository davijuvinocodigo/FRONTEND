import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  standalone: false,
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.scss'
})
export class PaiComponent implements OnInit{

  constructor() {}

  ngOnInit() {}

  exibirMensagem(msg: string) {
    alert('Mensagem do filho: ' + msg);
  }
}
