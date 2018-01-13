import { Component, OnInit } from '@angular/core';
import {SalesRepoService} from '../data/sales-repo.service';

@Component({
  selector: 'app-sales-listing',
  templateUrl: './sales-listing.component.html',
  styleUrls: ['./sales-listing.component.scss']
})
export class SalesListingComponent implements OnInit {

  constructor(private repo: SalesRepoService) { }

  ngOnInit() {
    this.repo.findAll();
    console.log('Jello on a plate');
  }

}
