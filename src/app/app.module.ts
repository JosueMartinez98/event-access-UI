import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './template/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './template/header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
    HomeModule,
    InputTextModule,
    MenubarModule,
    SharedModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
