import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

import { Mess } from '../../models/model';
import { Observable } from 'rxjs/Observable';

import { MessDetailPage } from '../mess-detail/mess-detail';
import { ViewLocationPage } from '../view-location/view-location';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<Mess[]>;
  
  constructor(public navCtrl: NavController,
  private afs:AngularFirestore) {
    const collRef: AngularFirestoreCollection<Mess> = this.afs.collection(`mess`);    
    this.items=collRef.valueChanges();
  }

  viewMess(messId, messName){
    this.navCtrl.push(MessDetailPage, { mid: messId, mName: messName } );
  }

  viewLocation(){
    this.navCtrl.push(ViewLocationPage);
  }

}
