import {Routes} from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {AuthenticationService} from './Services/authentication.service';
import {UploadComponent} from './upload/upload.component';
import {ImageDetailComponent} from './image-detail/image-detail.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationGuardService} from './Services/authentication-guard.service';

export const routes: Routes = [
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuardService]},
  { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuardService]},
  //{ path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuardService]},
  { path: '', redirectTo: '/gallery' , pathMatch: 'full'},
  { path: 'login', component: LoginComponent}
];
