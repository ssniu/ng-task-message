import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule

  ],
  declarations: [ConfirmDialogComponent],
  exports: [
      CommonModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatListModule,
      MatInputModule,
      MatSlideToggleModule,
      MatGridListModule,
      MatAutocompleteModule,
      MatDialogModule,
      MatMenuModule,
      MatCheckboxModule,
      MatTooltipModule,
      MatDatepickerModule,
      MatRadioModule,
      MatNativeDateModule,
      MatSelectModule
  ],
  entryComponents: [
      ConfirmDialogComponent
  ]
})
export class SharedModule { }
