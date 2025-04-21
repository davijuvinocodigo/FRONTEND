import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.scss'
})
export class FilhoComponent implements OnInit {

  @Input() checked!: boolean;

  constructor() { }

  ngOnInit() {
  }
}
