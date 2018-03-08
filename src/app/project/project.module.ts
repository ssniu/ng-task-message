import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { NewProjectComponent } from './new-project/new-project.component';

import { InviteComponent } from './invite/invite.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectRoutingModule } from './project-routing.module';

//import { MatDialogModule } from '@angular/material';
//import { OverlayModule } from '@angular/cdk/overlay';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [
    //CommonModule,
    SharedModule,
    ProjectRoutingModule
    //MatDialogModule,
    //MatAutocompleteModule
  ],
  declarations: [
      ProjectListComponent,
      NewProjectComponent,
      InviteComponent,
      ProjectItemComponent],
  //FilePreviewOverlayComponent],
      entryComponents: [
          NewProjectComponent,
          InviteComponent
          //FilePreviewOverlayComponent
      ]
})
export class ProjectModule { }
