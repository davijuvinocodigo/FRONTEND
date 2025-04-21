import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: false,
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss'
})
export class PropertyBindingComponent {
  inputText = "Texto Inicial Alterado";
  inputType = "text"
  isDisabled = false;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setPasswordTypeInput() {
    this.inputType = 'password';
  }

  setTextTypeInput() {
    this.inputType = 'text';
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

}
