import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {RouterModule, Routes} from '@angular/router';
import {routes} from './routes';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './Services/authentication.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthenticationGuardService} from './Services/authentication-guard.service';
import {ImageService} from './Services/image.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {UploadService} from './Services/upload.service';
import {AngularFireStorage} from 'angularfire2/storage';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavbarComponent,
    LoginComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.config)

],
  providers: [AuthenticationService, AngularFireAuth, AuthenticationGuardService,ImageService,AngularFireDatabase,UploadService,AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
