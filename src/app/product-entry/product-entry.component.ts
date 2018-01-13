import {Component, OnInit} from '@angular/core';
import {TransactionFactory} from '../data/model/transaction';
import {MatSnackBar} from '@angular/material';
import {Product, ProductFactory} from '../data/model/product';

//
@Component({
    selector: 'app-product-entry',
    templateUrl: './product-entry.component.html',
    styleUrls: ['./product-entry.component.scss']
})
export class ProductEntryComponent implements OnInit {
    product: Product;

    constructor(private snackbar: MatSnackBar) {
        this.product = ProductFactory.instOf();
    }

    ngOnInit() {
    }

    doCancel() {
        this.snackbar.open('Cancelled', null, {duration: 1000});

    }

    doSave() {
        this.snackbar.open('Posted', null, {duration: 1000});
    }

}
