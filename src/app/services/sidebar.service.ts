import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private isVisibleSidebar: boolean = false;
  constructor() { }

  setVisible() {
    this.isVisibleSidebar = !this.isVisibleSidebar;
    return this.isVisibleSidebar
  }
}
