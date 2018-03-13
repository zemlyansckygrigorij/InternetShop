import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonToggleModule,
  MatMenuModule, MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    // BrowserAnimationsModule,


    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatGridListModule,
    MatCheckboxModule

  ],
  exports: [
    // BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatMenuModule,
    MatCheckboxModule

  ],
})
export class MaterialModule { }

