import { Component, OnInit, HostBinding } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent}from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../anims/router.anim';
import { listAnimation } from '../../anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight,
       listAnimation],
})
export class ProjectListComponent implements OnInit {

    @HostBinding('@routeAnim') state;

    projects = [
        {
            "id": 1,
            "name": "task1",
            "desc": "a project of angular first",
            "coverImg": "/assets/0.jpg"
        },
        {
            "id": 2,
            "name": "task2",
            "desc": "a project of angular - second",
            "coverImg": "/assets/1.jpg"
        }
    ];


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {

      //this.dialog.open(NewProjectComponent, {data: 'this is my data'});
      const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: 'new project:'}});
      dialogRef.afterClosed().subscribe(result =>{
          console.log(result);
         this.projects = [...this.projects,
             {id: 3, name: 'newtask3', desc: 'a new task 3', coverImg:"/assets/0.jpg"},
             {id: 4, name: 'newtask4', desc: 'a new task 4', coverImg:"/assets/1.jpg"}
         ];
     } )
  }

  launchInviteDialog(){
      const dialogRef = this.dialog.open(InviteComponent);
      //dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchUpdateDialog(){
      const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: 'edit project:'}});
  }

  launchConfirmDialog(project){
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: 'delete project:',
           content:'confirm to delete this project'}});
      dialogRef.afterClosed().subscribe(result => {
          console.log(result);
          this.projects = this.projects.filter(p => p.id !== project.id);
  })

}
}
