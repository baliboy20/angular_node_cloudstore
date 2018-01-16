import {Component, OnInit, ViewChild} from '@angular/core';
import {SalesRepoService} from '../data/sales-repo.service';
import {Product} from '../data/model/product';
import {Observable} from 'rxjs/Observable';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/operator/merge';
import 'rxjs/add/observable/of';

@Component({
    selector: 'app-sales-listing',
    templateUrl: './sales-listing.component.html',
    styleUrls: ['./sales-listing.component.scss']
})
export class SalesListingComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private repo: SalesRepoService) {
        Observable.of([1, 2, 3, 4, 5]).merge(a => [6, 7, 8, 9])
            .subscribe(console.log);
    }

    products$: Observable<Product[]>;
    productsLen = 0;
    dataSource: MatTableDataSource<Product>;
    displayedColumns = ['description', 'price'];

    ngOnInit() {
        this.products$ = this.repo.listProducts();
        this.products$.subscribe(a => this.productsLen = a.length);

        this.repo.listProducts().subscribe((a: Product[]) => {
            this.dataSource = new MatTableDataSource(a);
            this.dataSource.paginator = this.paginator;
        });


    }

}
