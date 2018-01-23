import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListingComponent} from './product-listing.component';
import {ActivatedRouteSnapshot, Route, RouterModule} from '@angular/router';
import {MaterialsModule} from '../../materials/materials.module';
import {ProductListingDetailComponent} from './product-listing-detail/product-listing-detail.component';
import {FormsModule} from '@angular/forms';
import {ProductEntryModule} from '../product-entry/product-entry.module';

export const productListingRoutes: Route[] = [
    {
        path: 'product-listing', component: ProductListingComponent, children: [
            {path: 'detail/:id', component: ProductListingDetailComponent, outlet: 'productDetail'},
            // {path: 'detail', component: ProductListingDetailComponent, }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(productListingRoutes),
        MaterialsModule,
        FormsModule,
        ProductEntryModule,
    ],
    declarations: [ProductListingComponent, ProductListingDetailComponent],
    exports: [ProductListingComponent, ProductListingDetailComponent],

})
export class ProductListingModule {
}
