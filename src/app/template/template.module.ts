import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { RouterModule } from '@angular/router';
import { routes } from './template-routing.module';
import { ButtonModule } from 'primeng/button'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
  ],
  declarations: [
    TemplateComponent,
  ]
})
export class TemplateModule { }
