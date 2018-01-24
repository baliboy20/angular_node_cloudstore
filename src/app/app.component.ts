import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import Firestore = firebase.firestore.Firestore;
import {AngularFirestore} from 'angularfire2/firestore';
import {environment} from '../environments/environment.prod';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';
    rep = 'William'.repeat(3);

    constructor(private db: AngularFirestore) {
    }
version = environment.version;

    ngOnInit() {
        this.db.collection('transactions').valueChanges().subscribe(console.log);
    }
}
