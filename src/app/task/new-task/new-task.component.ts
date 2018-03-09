import { Component, OnInit , Inject} from '@angular/core';
//import {MatRadioModule} from '@angular/material/radio';
//import {MatDatepickerModule} from '@angular/material/datepicker';
//import { MatNativeDateModule } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

    title = '';

    priorities = [
        {
            label: 'urgent',
           value: 1
       },
       {
           label: 'regular',
          value: 2
      },
      {
          label: 'wait',
         value: 3
     }
    ]

    constructor(@Inject(MAT_DIALOG_DATA) private data){}
       //private dialogRef: MatDialogRef<NewTaskComponent>) { }

  ngOnInit() {
      this.title = this.data.title;
      console.log(JSON.stringify(this.data.task));
  }

}
