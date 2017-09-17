import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    products: FirebaseListObservable<any[]>;

    constructor(db: AngularFireDatabase) {
        this.products = db.list('/products');
  }
    // isDropped = false;
    //
    // footerDrop(){
    //     console.log('clicked');
    //     this.isDropped = !this.isDropped;
    // }
}
