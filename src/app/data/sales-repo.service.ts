import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/take';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Product} from './model/product';
import {AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable()
export class SalesRepoService {

    $products: BehaviorSubject<Product[]> = new BehaviorSubject([]);

    constructor(private db: AngularFirestore) {
        this.db.collection('transactions').valueChanges().subscribe(console.log);
        console.log('HIND LEGS OFF A DONKEY');
    }

    findAll() {
        // this.http.get('https://localhost:8443/sales')
        //     .take(100)
        //     .subscribe(console.log);
    }

    findBetween(d1: Date, d2: Date) {
    }

    listProducts() {
        // this.db.collection('PRODUCTS').stateChanges().subscribe(console.log);
        return this.db.collection('PRODUCTS').valueChanges();
    }

    updateProducts() {
    }

    deleteProducts() {
    }

    insertProducts(product): Promise<DocumentReference> {
      return  this.db.collection('PRODUCTS').add(product);

    }


}
