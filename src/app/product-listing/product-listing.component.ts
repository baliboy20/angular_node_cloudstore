import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {SalesRepoService} from '../data/sales-repo.service';
import {Product} from '../data/model/product';
import {Observable} from 'rxjs/Observable';
import {MatDrawer, MatPaginator, MatSidenavContainer, MatSort, MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
    selector: 'app-product-listing',
    templateUrl: './product-listing.component.html',
    styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit, AfterViewInit {


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('filter') filer: ElementRef;
    @ViewChild(MatDrawer) sideNav: MatDrawer;

    @HostListener('closeForm') set closeForm(value) {
        console.log('CLOSE FORM');
    }

    productData: Product[] = [];

    constructor(private repo: SalesRepoService,
                private router: Router,
                private  act: ActivatedRoute) {
    }

    products$: Observable<Product[]>;
    productsLen = 0;
    dataSource: MatTableDataSource<Product>;
    displayedColumns = ['description', 'price'];

    onActivate(event) {
        console.log('Route activated..', this.sideNav);
        this.sideNav.open();
    }

    onDeactivate(event) {
        console.log('Route de-activated..');
        this.sideNav.close();
    }

    ngOnInit() {
        this.repo.listProducts().subscribe((a: Product[]) => {
            console.log('get product data from listproducts ....');
            this.productData = [];
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

    openSideNav() {
        this.sideNav.open();
    }

    closeSideNav() {
        this.sideNav.close();
    }

    navigateToDetail(value: any) {
        setTimeout(a => {
            const str = JSON.stringify(value);
            const outlet1 = {outlets: {productDetail: ['detail', str]}};
            this.router.navigate(['product-listing', outlet1]);
        }, 100);
        const outlet = {outlets: {productDetail: null}};
    }
    removeProduct(id: string) {
        this.repo.deleteProducts(id).then(console.log).catch(console.log);
    }

    ngAfterViewInit(): void {


    }

}
