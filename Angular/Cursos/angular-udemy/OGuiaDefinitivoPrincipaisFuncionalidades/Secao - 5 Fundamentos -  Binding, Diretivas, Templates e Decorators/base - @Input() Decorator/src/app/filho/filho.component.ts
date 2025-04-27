import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.scss'
})
export class FilhoComponent implements OnInit {

  @Input() mensagem!: string; // Recebe uma string do componente pai

  constructor() { }

  ngOnInit() {
  }
}
