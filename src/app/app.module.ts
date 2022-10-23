import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
