import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingDetailComponent } from './product-listing-detail.component';

describe('ProductListingDetailComponent', () => {
  let component: ProductListingDetailComponent;
  let fixture: ComponentFixture<ProductListingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
