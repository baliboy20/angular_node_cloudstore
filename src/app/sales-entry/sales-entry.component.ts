import {Component, OnInit, QueryList} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Transaction, TransactionFactory} from '../data/model/transaction';
import {SalesRepoService} from '../data/sales-repo.service';
import {Product} from '../data/model/product';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/do';
import {style, transition, trigger, animate} from '@angular/animations';

@Component({
    selector: 'app-sales-entry',
    templateUrl: './sales-entry.component.html',
    styleUrls: ['./sales-entry.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({opacity: '1'}),
                animate('.5s ease-out', style({opacity: '1'})),
            ]),
            transition(':leave', [
                style({opacity: '1', color: 'red'}),
                animate('100ms ease-out', style({opacity: '0', color: 'gray'})),
            ]),
        ]),
    ],
})
export class SalesEntryComponent implements OnInit {

    ordersMap: Map<String, Transaction> = new Map<String, Transaction>();
    orders: Array<Transaction>;
    products: Product[];
    total = 0;

    constructor(private snackbar: MatSnackBar,
                private repo: SalesRepoService) {

        // sale = TransactionFactory.instOf();
    }

    ngOnInit() {
        const comparator = (a: Product, b: Product) => {
            if (a.description < b.description) {
                return -1;
            } else if (a.description > b.description) {
                return 1;
            } else {
                return 0;
            }
        };
        this.repo.listProducts()
            .map((a: Product[]) => a.sort(comparator))
            .subscribe(a => this.products = a);
    }

    addProduct(value: Product) {

        if (this.ordersMap.has(value.description)) {
            this.ordersMap.get(value.description).quantity += 1;
        } else {
            const trans = TransactionFactory.instOf(value.id, value.description, 1, value.price);
            this.ordersMap.set(value.description, trans);
        }
        this.orders = Array.from(this.ordersMap.values());
        this._calcTotal();
    }

    _calcTotal() {
        this.total = this.orders.reduce((a, b) => {
            a += b.quantity * b.price;
            return +a.toFixed(2);
        }, 0);
    }

    addTransaction(value) {
        const trans = this.ordersMap.get(value.description);
        trans.quantity++;
    }

    removeTransaction(value) {
        const trans = this.ordersMap.get(value.description);
        if (trans.quantity > 1) {
            trans.quantity -= 1;
        } else {
            this.ordersMap.delete(value.description);
            this.orders = Array.from(this.ordersMap.values());
        }

        this._calcTotal();
    }

    doCancel() {
        this.snackbar.open('Cancelled', null, {duration: 1000});
    }

    doTest() {
        this.repo.listProducts1();
    }

    doPersistOrder() {
        console.log('do persist');
        this.repo.insertTransaction(this.orders)
            .then(a => {
                console.log('data result', a);
                this.snackbar.open('Transaction done', null, {duration: 1000});
            }, error => {
                this.snackbar.open(error, null, {duration: 1000});
            });
    }

    doCancelOrder() {
        console.log('Do Cancel order');
        this.ordersMap = null;
        this.orders = [];
        this.repo.to();
    }
}
