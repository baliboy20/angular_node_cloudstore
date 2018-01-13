import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Transaction, TransactionFactory} from '../data/model/transaction';

@Component({
    selector: 'app-sales-entry',
    templateUrl: './sales-entry.component.html',
    styleUrls: ['./sales-entry.component.scss']
})
export class SalesEntryComponent implements OnInit {

    sale: Transaction ;
    constructor(private snackbar: MatSnackBar) {
        this.sale = TransactionFactory.instOf();
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
