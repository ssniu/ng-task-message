import { Component, OnInit, HostBinding } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { NewTaskComponent} from '../new-task/new-task.component';
import { CopyTaskComponent} from '../copy-task/copy-task.component';
import { ConfirmDialogComponent}from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent} from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../anims/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [slideToRight],
})
export class TaskHomeComponent implements OnInit {

lists = [
    {
        id: 1,
        name: 'todo',
        tasks: [
            {
                id: 1,
                desc: 'list 1--buy tomato',
                completed: true,
                priority: 3,
                owner: {
                    id: 1,
                    name: 'John'
                },
                dueDate: new Date(),
            },
            {
                id: 2,
                desc: 'list 2 -- go to post office',
                completed: false,
                priority: 1,
                owner: {
                    id: 1,
                    name: 'Mary'
                },
                dueDate: new Date(),
            }
        ]
    },
    {
        id: 2,
        name: 'in progress',
        tasks: [
            {
                id: 1,
                desc: 'todo3--code review',
                completed: false,
                priority: 3,
                owner: {
                    id: 1,
                    name: 'Jack'
                },
                dueDate: new Date(),
                reminder: new Date(),
            },
            {
                id: 2,
                desc: 'todo4 -- make plan',
                completed: false,
                priority: 2,
                owner: {
                    id: 1,
                    name: 'John'
                },
                dueDate: new Date(),
            }
        ]
    }
]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog(){
      //this.dialog.open(NewTaskComponent);
      const dialogRef = this.dialog.open(CopyTaskComponent, {data: {title:'new task:'}});
  }

  launchCopyTaskDialog(){
      const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task){
      const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: 'update task', task: task}})
      //task:task --> key: value
  }
  launchConfirmDialog(){
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: 'delete task:',
           content:'confirm to delete this task'}});
      dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchEditListDialog(){
      const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: 'update list:',
           content:'confirm to delete this task'}});
      dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchNewListDialog(){
      const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: 'new list:',
           content:'confirm to delete this task'}});
      dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  handleMove(srcData, list){
      switch(srcData.tag){
          case 'task-item':
              console.log('hangling item');
              console.log(srcData.tag);
              break;
          case 'task-list':
              console.log('hangling list');
               console.log(srcData.tag);
              break;
          default:
              break;
      }
  }

}
