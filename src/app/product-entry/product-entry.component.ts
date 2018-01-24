import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TransactionFactory} from '../data/model/transaction';
import {MatChipInputEvent, MatSnackBar} from '@angular/material';
import {Product, ProductFactory} from '../data/model/product';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {SalesRepoService} from '../data/sales-repo.service';

//
@Component({
    selector: 'app-product-entry',
    templateUrl: './product-entry.component.html',
    styleUrls: ['./product-entry.component.scss']
})
export class ProductEntryComponent implements OnInit {
    product: Product = ProductFactory.instOf();

    @Input() set selectedProduct(value: Product) {
        this.product = ProductFactory.clone(value);
    }

    @Output() formDoneEvent: EventEmitter<any> = new EventEmitter()

    separatorKeysCodes = [ENTER, COMMA];
    addOnBlur = true;

    constructor(private snackbar: MatSnackBar, private  repo: SalesRepoService) {
        this.product = ProductFactory.instOf();
    }

    ngOnInit() { }

    doCancel() {
        this.product = ProductFactory.instOf();
        this.formDoneEvent.emit('FORM_DONE_EVENT');
    }

    doSave() {
        this.snackbar.open('Posted', null, {duration: 1000});
        this.repo.insertProducts(this.product)
            .then(a => {
                this.snackbar.open('INSERT COMPLETED', null, {duration: 1000});
                this.formDoneEvent.emit('FORM_DONE_EVENT');
            }).catch(a => {
            this.snackbar.open(a, null, {duration: 1000});
        });
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our person
        if ((value || '').trim()) {
            this.product.categories.push(value.trim());
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(fruit: any): void {
        const index = this.product.categories.indexOf(fruit);

        if (index >= 0) {
            this.product.categories.splice(index, 1);
        }
    }

}
