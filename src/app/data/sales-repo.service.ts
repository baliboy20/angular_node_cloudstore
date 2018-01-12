import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/take';

@Injectable()
export class SalesRepoService {

    constructor(private http: HttpClient) {
    }

    findAll() {
        // this.http.get('https://localhost:8443/sales')
        //     .take(100)
        //     .subscribe(console.log);
    }

    findBetween(d1: Date, d2: Date) {
    }



}
