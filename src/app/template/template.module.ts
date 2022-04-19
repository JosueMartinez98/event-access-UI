import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { RouterModule } from '@angular/router';
import { routes } from './template-routing.module';
import { ButtonModule } from 'primeng/button'
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    RouterModule.forChild(routes),
    SidebarModule,
  ],
  declarations: [
    TemplateComponent,
  ]
})
export class TemplateModule { }
