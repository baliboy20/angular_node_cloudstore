
## Angular
### Router
* Router Outlet
    * multiple router outlets.
* Intercetors
    * Mesage body query params
    * OAuth2 

#### Universal
#### Firebase deployment
#### Testing
#### HttpClient
#### Directives

* ElementRef
```apple js
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
```
use the ElementRefin the directive's constructor to inject a reference to the host DOM element
* @HostListener
```apple js
@Input() appHighlight: string;
@HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.highlightColor || this.defaultColor || 'red');
}
```


## Angular Material
* Form items
* modals and popups
* Theming
* Animations



## Mongodb
## Spring Boot
* OAuth2
* HttpServer 
    * Requestbody
    * QueryParams
## Docker
## NodeJS/Express 