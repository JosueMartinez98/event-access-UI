import { Component, Input, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  @Input()
  public isVisible: boolean = true;

  public sidebarMenu: MenuItem[] = [];

  constructor() { }

  ngOnInit() {

    this.sidebarMenu = [
      {
        label: 'File',
        items: [
            {label: 'New', icon: 'pi pi-plus'},
            {label: 'Open', icon: 'pi pi-download'}
        ]
    },
    {
        label: 'Edit',
        items: [
            {label: 'Undo', icon: 'pi pi-refresh'},
            {label: 'Redo', icon: 'pi pi-repeat'}
        ]
    }
      // {
      //   icon: 'bi bi-hospital',
      //   label: 'School',
      // },
      // {
      //   icon: 'bi bi-person-fill',
      //   label: 'My account',
      //   items: [
      //     [
      //       {
      //         label: 'My courses',
      //       },
      //       {
      //         icon: 'bi bi-person-video3',
      //         label: 'My Groups'
      //       }
      //     ]
      //   ]
      // }
    ]
  }
}
