import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-overlay',
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  constructor(private dashboard: DashboardService) {}

  sidebarOpen() {
    return this.dashboard.sidebarOpen;
  }

  closeSidebar() {
    this.dashboard.closeSidebar();
  }
}
