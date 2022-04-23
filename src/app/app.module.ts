// Principal Modules
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';

// Components
import { AppComponent } from './app.component';

// Services
import { ResizeService } from './services/resize.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot([]),
    AppRoutingModule,
    AvatarModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
    HomeModule,
    InputTextModule,
    MegaMenuModule,
    MenubarModule,
    SharedModule,
    SidebarModule,
  ],
  providers: [
    ResizeService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
