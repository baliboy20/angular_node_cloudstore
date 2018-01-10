import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MaterialsModule} from '../materials/materials.module';
import {SalesListingModule} from './sales-listing/sales-listing.module';
import {SalesRepoService} from './data/sales-repo.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        MaterialsModule,
        SalesListingModule,
        HttpClientModule,
        RouterModule.forRoot([]),
    ],
    providers: [SalesRepoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
