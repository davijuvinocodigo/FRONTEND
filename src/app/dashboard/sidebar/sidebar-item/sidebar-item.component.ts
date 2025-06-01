import { Component, Input } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterModule],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {
  @Input() title: string;  // Propriedade para receber o link
  @Input() routerLink: string; // Propriedade para receber o título

  constructor(private dashboard: DashboardService) {
    this.title = '';
    this.routerLink = '';
  }

  currentRoute() {
    // Lógica para obter a rota atual
    return this.dashboard.currentRoute;
  }

  sidebarOpen() {
    // Lógica para verificar se a sidebar está aberta
    return this.dashboard.sidebarOpen;
  }
}
