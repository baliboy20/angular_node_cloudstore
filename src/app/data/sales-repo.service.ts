import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/fromPromise';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Product} from './model/product';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import DocumentReference = firebase.firestore.DocumentReference;
import {Observable} from 'rxjs/Observable';
import {Transaction, TransactionFactory} from './model/transaction';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {toArray} from 'rxjs/operator/toArray';

@Injectable()
export class SalesRepoService {

    static PATHS = {
        orders: 'ORDERS',
        idGen: 'receiptId',
        products: 'PRODUCTS'
    };
    $products: BehaviorSubject<Product[]> = new BehaviorSubject([]);

    private _DCAToProduct_avec_Id = (a: DocumentChangeAction) => {
        const prod: Product = a.payload.doc.data() as Product;
        prod.id = a.payload.doc.id;
        return prod;
    };

    private _prodCol = () => this.db.collection('PRODUCTS');

    constructor(private db: AngularFirestore) {
        this.db.collection('transactions').valueChanges().subscribe(console.log);

    }

    findAll() {
        // this.http.get('https://localhost:8443/sales')
        //     .take(100)
        //     .subscribe(console.log);
    }

    findBetween(d1: Date, d2: Date) {
    }

    listProducts(): Observable<any> {
        console.log('ehlllo dolly');
        return this._prodCol()
            .snapshotChanges()
            .mergeMap(a => Observable.from(a).map(this._DCAToProduct_avec_Id).toArray())
            .do(a => console.log('calling list products :===>', a)) ;
    }

    listProducts1(): void {

        this._prodCol().snapshotChanges()
            .mergeMap((a) => {
                return Observable.from(a);
            })
            .map(this._DCAToProduct_avec_Id)
            .subscribe(a => {
                const db = () => this.db.collection(SalesRepoService.PATHS.products);
                db().doc(a.id).update({group: 'Beverages'});
            });
    }

    updateProducts(prod: Product): Promise<void> {
        console.log('update product');
       return this._prodCol().doc(prod.id).set(prod);
    }

    deleteProducts(id: string): Promise<void> {
        return this._prodCol().doc(id).delete();
    }

    insertProducts(product): Promise<DocumentReference> {
        return this.db.collection('PRODUCTS').add(product);

    }

    insertTransaction(transactions: Transaction[]): Promise<string> {

        const PATHS = SalesRepoService.PATHS;
        const MSG = {
            keyCatch: 'Error setting new key',
            docSuccess: 'Transacton OK',
            docError: 'Failure has occured, transaction not persisted',
        };

        const compKey: (number) => [number, string] = (id) => [id + 1, id + 'P'];

        const p: Promise<any> = new Promise((resolve, reject) => {

            const doc = () => this.db.collection(PATHS.idGen).doc('id');
            const transac = this.db.collection(PATHS.orders);

            const varr = doc().valueChanges()
                .map(o => o['id'])
                .subscribe(id => {
                    varr.unsubscribe();

                    const v: [number, string] = compKey(+id);

                    // console.log(id, v);
                    doc().set({id: v[0]})
                        .catch(a1 => reject(MSG.keyCatch));

                    transac.doc(v[1]).set({receipt: v[0], date: new Date(), items: transactions})
                        .then(a2 => resolve(MSG.docSuccess))
                        .catch(a2 => reject(MSG.docError));
                });
        });

        return p;
    }

    to(value?: number) {
        console.log('to');  //
        const doc = this.db.collection('receiptId').doc('id');
        const varr = doc.valueChanges()
            .map(a => a['id'])
            .subscribe(a => {
                console.log(a);
                varr.unsubscribe();
                doc.set({id: ++a});
            });


        // this.db.collection('cities').doc('LA').set({
        //     name: 'Los Angeles',
        //     state: 'CA',
        //     country: 'USA'
        // })
        //     .then(function() {
        //         console.log('Document successfully written!');
        //     })
        //     .catch(function(error) {
        //         console.error('Error writing document: ', error);
        // //     });
        // console.log('calling to');
        // doc.valueChanges()
        //     .subscribe(a => {
        //         const val = +a['id'];
        //         console.log('value', val);
        //         doc.set({id: val + 1})
        //             .then(console.log);
        //         // doc.set({name: 'London1', state: 'London1'})
        //         //     .then(console.log, console.log);
        //     });


    }
}
