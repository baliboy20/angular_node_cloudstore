import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesListingComponent } from './sales-listing.component';
import {MaterialsModule} from '../../materials/materials.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, MaterialsModule,
      RouterModule.forChild([
          {path: 'listing', component: SalesListingComponent}
      ])
  ],
  declarations: [SalesListingComponent],
  exports: [SalesListingComponent],
})
export class SalesListingModule { }
