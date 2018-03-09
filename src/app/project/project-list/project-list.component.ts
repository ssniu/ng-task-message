import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent}from '../../shared/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

    projects = [
        {
            "name": "task1",
            "desc": "a project of angular first",
            "coverImg": ""
        },
        {
            "name": "task2",
            "desc": "a project of angular - second",
            "coverImg": ""
        }
    ];


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {

      //this.dialog.open(NewProjectComponent, {data: 'this is my data'});
      const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: 'new project:'}});
      dialogRef.afterClosed().subscribe(result => console.log(result));

  }

  launchInviteDialog(){
      const dialogRef = this.dialog.open(InviteComponent);
      //dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchUpdateDialog(){
      const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: 'edit project:'}});
  }

  launchConfirmDialog(){
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: 'delete project:',
           content:'confirm to delete this project'}});
      dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
