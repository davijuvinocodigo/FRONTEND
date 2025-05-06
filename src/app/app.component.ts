import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavigationComponent } from "./app-navigation/app-navigation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
