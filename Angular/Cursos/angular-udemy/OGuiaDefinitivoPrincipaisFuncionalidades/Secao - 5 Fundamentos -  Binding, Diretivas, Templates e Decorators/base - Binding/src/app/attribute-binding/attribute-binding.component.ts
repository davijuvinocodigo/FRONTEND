import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  standalone: false,
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.scss'
})
export class AttributeBindingComponent {

  isDisabled = false;

  buttonTitle = 'Título do botão';
  buttonDisable = true;


  onButtonClick() {
    this.buttonTitle = 'Título Alterado';
    this.buttonDisable = !this.buttonDisable;
  }
}
