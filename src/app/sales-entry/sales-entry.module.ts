import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesEntryComponent } from './sales-entry.component';
import {MaterialsModule} from '../../materials/materials.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      MaterialsModule,
      RouterModule.forChild([{path: 'sales-entry', component: SalesEntryComponent}])
  ],
  declarations: [SalesEntryComponent],
  exports: [SalesEntryComponent],
})
export class SalesEntryModule { }
