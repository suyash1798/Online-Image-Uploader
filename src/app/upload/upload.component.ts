import { Component, OnInit } from '@angular/core';
import {Upload} from '../Models/upload.model';
import {UploadService} from '../Services/upload.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  files: FileList;
  upload: Upload;

  constructor(private uploadService: UploadService) { }

  uploadFile(){
    const filesToupload = this.files;
    const filesid = _.range(filesToupload.length);
    _.each(filesid,(id)=>{
      this.upload = new Upload(filesToupload[id]);
      this.uploadService.uploadFile(this.upload);
    });
  }

  handleFile(event) {
    this.files = event.target.files;
  }


  ngOnInit() {
  }

}
