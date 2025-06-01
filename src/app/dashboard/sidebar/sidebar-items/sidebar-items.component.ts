import { Component } from '@angular/core';

import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { HomeIconComponent } from '../../icons/home-icon/home-icon.component';
import { StatusIconComponent } from '../../icons/status-icon/status-icon.component';
import { ArchiveIconComponent } from '../../icons/archive-icon/archive-icon.component';
import { CreditIconComponent } from '../../icons/credit-icon/credit-icon.component';
import { SettingsIconComponent } from '../../icons/settings-icon/settings-icon.component';
import { DocIconComponent } from '../../icons/doc-icon/doc-icon.component';

@Component({
  selector: 'app-sidebar-items',
  imports: [
    SidebarItemComponent,
    HomeIconComponent,
    StatusIconComponent,
    ArchiveIconComponent,
    CreditIconComponent,
    SettingsIconComponent,
    DocIconComponent,
  ],
  templateUrl: './sidebar-items.component.html',
  styleUrl: './sidebar-items.component.scss'
})
export class SidebarItemsComponent {

}
