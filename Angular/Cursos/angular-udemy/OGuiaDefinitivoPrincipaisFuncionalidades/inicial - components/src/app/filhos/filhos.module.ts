import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filho1Component } from './filho1/filho1.component';
import { Filho1ButtonComponent } from './filho1-button/filho1-button.component';
import { Filho2Component } from './filho2/filho2.component';
import { Filho2ButtonComponent } from './filho2-button/filho2-button.component';
import { Filho3ButtonCancelComponent } from './filho3-button-cancel/filho3-button-cancel.component';



@NgModule({
  declarations: [
    Filho1Component,
    Filho1ButtonComponent,
    Filho2Component,
    Filho2ButtonComponent,
    Filho3ButtonCancelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Filho1Component,
    Filho2Component,
    Filho1ButtonComponent  
  ]
})
export class FilhosModule { }
