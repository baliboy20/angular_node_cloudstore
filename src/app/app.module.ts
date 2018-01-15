import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MaterialsModule} from '../materials/materials.module';
import {SalesListingModule} from './sales-listing/sales-listing.module';
import {SalesRepoService} from './data/sales-repo.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {SalesEntryModule} from './sales-entry/sales-entry.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        BrowserAnimationsModule,
        MaterialsModule,
        SalesListingModule,
        HttpClientModule,
        SalesEntryModule,
        AngularFireModule.initializeApp(environment.firebase, 'twosteptext'),
        AngularFirestoreModule,
        RouterModule.forRoot([
            // { path: '', redirectTo: 'sales-entry', pathMatch: 'full'},
            {path: 'listing', loadChildren: './sales-listing/sales-listing.module#SalesListingComponent'},
            // { path: 'sales-entry', children: './sale-entry/sales-entry.module#SalesEntryComponent'},
            {path: 'sales-entry', loadChildren: './sales-entry/sales-entry.module#SalesEntryModule'},
            {path: 'product-entry', loadChildren: './product-entry/product-entry.module#ProductEntryModule'},

        ]),
    ],
    providers: [SalesRepoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
