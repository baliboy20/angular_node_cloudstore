import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import {RouterModule} from '@angular/router';
import {SalesEntryComponent} from '../sales-entry/sales-entry.component';
import {FormsModule} from '@angular/forms';
import {MaterialsModule} from '../../materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      MaterialsModule,
      RouterModule.forChild([{path: '', component: SidenavComponent}])
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SidenavModule { }
