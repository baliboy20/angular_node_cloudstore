import { Component, OnInit } from '@angular/core';
import {SalesRepoService} from '../data/sales-repo.service';
import {Product} from '../data/model/product';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-sales-listing',
  templateUrl: './sales-listing.component.html',
  styleUrls: ['./sales-listing.component.scss']
})
export class SalesListingComponent implements OnInit {

  constructor(private repo: SalesRepoService) { }

  products$: Observable<Product[]>;
  ngOnInit() {
    this.products$ = this.repo.listProducts();
  }

}
