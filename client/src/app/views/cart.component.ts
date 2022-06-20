import {Component} from "@angular/core"
import { Store } from "../services/store.services";

@Component({
selector: "cart",
templateUrl: "cart.component.html",
styleUrls: [ "cart.component.css" ]
})
export class CartComponent {

    constructor( public store: Store)
    {}

}