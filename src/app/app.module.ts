import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
