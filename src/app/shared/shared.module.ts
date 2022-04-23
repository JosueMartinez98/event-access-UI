import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './shared-routing.module';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar';
import { ResizeService } from '../services/resize.service';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AvatarModule,
    ButtonModule,
    CommonModule,
    MenuModule,
    MenubarModule,
    PanelMenuModule,
    SidebarModule,
    PanelModule
  ],
  declarations: [
    TemplateComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    SidebarComponent,
  ],
  providers: [
    ResizeService
  ],
  exports: [
    PageNotFoundComponent,
    HeaderComponent
  ]

})
export class SharedModule { }
