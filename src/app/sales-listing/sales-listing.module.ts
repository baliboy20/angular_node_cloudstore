import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesListingComponent } from './sales-listing.component';
import {MaterialsModule} from '../../materials/materials.module';

@NgModule({
  imports: [
    CommonModule, MaterialsModule,
  ],
  declarations: [SalesListingComponent],
  exports: [SalesListingComponent],
})
export class SalesListingModule { }
