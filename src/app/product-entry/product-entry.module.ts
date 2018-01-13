import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEntryComponent } from './product-entry.component';
import {MaterialsModule} from '../../materials/materials.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SalesEntryComponent} from '../sales-entry/sales-entry.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialsModule,
        RouterModule.forChild([{path: '', component: ProductEntryComponent}])
    ],
    declarations: [ProductEntryComponent],
    exports: [ProductEntryComponent],
})
export class ProductEntryModule { }
