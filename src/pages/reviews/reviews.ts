import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AddReviewPage } from '../add-review/add-review';
import { AuthProvider } from '../../providers/auth/auth';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {

  items: Observable<any[]>;
  flag:boolean=false;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private afs:AngularFirestore,
  public modalCtrl: ModalController,
  private authProvider: AuthProvider) {
    var d1= new Date();
    d1.setHours(0, 0, 0, 0);

    //var ref=this.afs.firestore.doc('');
  
    const collRef: AngularFirestoreCollection<any> = this.afs.collection(`mess/${this.navParams.get('messId')}/menu/${this.navParams.get('mid')}/reviews`);    
    this.items=collRef.valueChanges();

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`mess/${this.navParams.get('messId')}/menu/${this.navParams.get('mid')}/reviews/${this.authProvider.getUser().uid}`);

    userRef.ref.onSnapshot(doc => {
      if(doc.exists) {
        this.flag=false;        
      } else {
        this.flag=true;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsPage');
  }

  addReview() {
    console.log('Reviews \nMessId:'+this.navParams.get('messId')+"\nMenuId:"+this.navParams.get('mid')); 
    
    let modal = this.modalCtrl.create(AddReviewPage, { messId: this.navParams.get('messId'), menuId: this.navParams.get('mid'), menuName: this.navParams.get('mName') });
    modal.present();
  }
}
