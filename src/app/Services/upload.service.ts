import { Injectable } from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {GalleryComponent} from '../gallery/gallery.component';
import {ImageModel} from '../Models/image.model';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {Upload} from '../Models/upload.model';
import * as firebase from 'firebase';
import {storage} from 'firebase';
import {AngularFireStorage} from 'angularfire2/storage';

@Injectable()
export class UploadService {

  private path = '/uploads';

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) {
  }

  uploadFile(upload: Upload) {
      upload.url = null;
    const uploadTask = this.storage.upload(`${this.path}/${upload.file.name}`, upload.file);
    uploadTask.percentageChanges().subscribe((data)=>{
      if(data){
        upload.progress = data;
      }
    });
    uploadTask.downloadURL().subscribe((data) => {
      if (data) {upload.url = data;
        this.saveFileData(upload);}

    });

  }

  private saveFileData(upload: Upload) {
    this.db.list(`${this.path}/`).push({
      'url': upload.url.toString(),
      'name': upload.file.name.toString()
    });
  }
}
