## CREATE A MATERIAL 2 TABLE

[Link to doc](https://material.angular.io/components/table/overview)

### STEPS
 A. Create Datasource
 
 MatTable takes a function as a datasource that returns an Observable
 e.g. 
 
 ````
 
  products$: Observable<Product[]>;
     productSource = {
         connect: (): Observable<Product[]> => this.products$,
         disconnect: () => {},
     };
     
 ````
 
 B. Declare columns
 *  list column names in array
 ````html
displayedColumns = ['description', 'price'];
````
 *  Header row definition at bottom of the table.
 ```html
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
```
 
      B.1. Each column definition (in a ngContainer) needs  a column ref.
 ```html
     <ng-container matColumnDef="price">
```

 C. Declare cell renderers
 
 ````html
   <mat-header-cell *matHeaderCellDef> Price </mat-header-cell>
    <mat-cell *matCellDef="let productSource"> {{productSource.price}} </mat-cell> 
 ````
