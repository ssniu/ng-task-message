import { Component, OnInit, Inject } from '@angular/core';
//support the theme, use overlay
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {OverlayModule} from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
    title= '';

  constructor(private dialogRef: MatDialogRef<NewProjectComponent>,
      @Inject(MAT_DIALOG_DATA) public data
      //private oc: Overlay
   ) { }

  ngOnInit() {
      this.title = this.data.title;
      console.log(JSON.stringify(this.data));
  }

  onClick(){
      this.dialogRef.close('received the message');
  }
}
