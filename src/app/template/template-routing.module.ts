import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';

export const routes: Routes = [
  {
    path: '',
    component: TemplateComponent
  },
  {
    path: '**',
    loadChildren: () => import('../common/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
