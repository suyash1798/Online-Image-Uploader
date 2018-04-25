import {Injectable, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ImageModel} from '../Models/image.model';
import * as firebase from 'firebase';
@Injectable()
export class ImageService implements OnInit {

  Userid: string;

  ngOnInit(): void {
    this.fauth.authState.subscribe((User) => {
      if (User) {
        this.Userid = User.uid;
      }
    });
  }

  constructor(private fauth: AngularFireAuth, private fdb: AngularFireDatabase) { }

  getImages(): Observable<ImageModel[]> {
    return this.fdb.list('uploads').valueChanges();
}
  getImage(key: string) {
    return this.fdb.database.ref('upload/' + key).once('value').then((data) => data.val());
  }

}
