import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SalesRepoService} from '../data/sales-repo.service';
import {Product} from '../data/model/product';
import {Observable} from 'rxjs/Observable';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';

@Component({
    selector: 'app-product-listing',
    templateUrl: './product-listing.component.html',
    styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit, AfterViewInit {


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('filter') filer: ElementRef;

    productData: Product[] = [];

    constructor(private repo: SalesRepoService) {

    }

    products$: Observable<Product[]>;
    productsLen = 0;
    dataSource: MatTableDataSource<Product>;
    displayedColumns = ['description', 'price'];

    ngOnInit() {

        this.repo.listProducts().subscribe((a: Product[]) => {
            console.log('data', a);
            this.productData = this.productData.concat(...a);
            this.dataSource = new MatTableDataSource(this.productData);
            this.dataSource.sort = this.sort;
        });

    }

    applyFilter(filterValue: string) {
        console.log('applying filter');
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    ngAfterViewInit(): void {


    }

}
