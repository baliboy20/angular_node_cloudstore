import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../data/model/product';

@Component({
    selector: 'app-product-listing-detail',
    templateUrl: './product-listing-detail.component.html',
    styleUrls: ['./product-listing-detail.component.scss']
})
export class ProductListingDetailComponent implements OnInit {

    productData: Product;
    @Output() closeEvent: EventEmitter<any> = new EventEmitter()


    constructor(private act: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.act.params.subscribe(a => this.productData = JSON.parse(a['id']) as Product);
    }

    onFormDone(ev: string) {
        this.closeEvent.emit('CLOSE_FORM');
        console.log('on form done');
        this.router.navigate(['product-listing']);
    }

}
