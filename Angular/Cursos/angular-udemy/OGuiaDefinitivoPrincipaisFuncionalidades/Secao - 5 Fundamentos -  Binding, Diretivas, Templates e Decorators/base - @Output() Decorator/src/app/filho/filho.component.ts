import { Component, Output, OnInit , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.scss'
})
export class FilhoComponent implements OnInit {

  @Output() mensagem = new EventEmitter<string>();

  constructor() { }
  ngOnInit() { }

  enviarMensagem() {
    this.mensagem.emit('Oi Pai alguem clicou no botão');
  }
}
