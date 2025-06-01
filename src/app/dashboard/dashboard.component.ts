import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private router: Router, private dashboard: DashboardService) {
    this.router.events.subscribe((event: Event) => {
      this.dashboard.setCurrentRoute(this.router.url);
      if (event instanceof NavigationEnd) {
        if (this.dashboard.sidebarOpen) {
          this.dashboard.closeSidebar();
        }
      }
    });
  }
  
  ngOnInit() {
    document.documentElement.style.overflow = 'hidden'; // set the html tag attribute overflow to hidden when component is mounted
  }

}
