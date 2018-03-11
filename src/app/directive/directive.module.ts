import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDirective } from './drag-drop/drag.directive';

import { DropDirective } from './drag-drop/drop.directive';
import { DragDropService, DragData} from './drag-drop.service';

@NgModule({
  exports: [
      DragDirective,
      DropDirective
  ],
  declarations: [
      DragDirective,
      DropDirective
  ],
  providers: [
      DragDropService
  ]
})
export class DirectiveModule { }
export {DragData};
