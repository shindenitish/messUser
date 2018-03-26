import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Loading, LoadingController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';


@Component({
  selector: 'page-add-review',
  templateUrl: 'add-review.html',
})
export class AddReviewPage {
  
  private reviewForm:FormGroup;
  private loading: Loading;
  rating=0;
     
  constructor(public navCtrl: NavController,
  public loadingCtrl: LoadingController,
  public navParams: NavParams,
  public formBuilder: FormBuilder, 
  public viewCtrl: ViewController,
  private authProvider:AuthProvider,
  private afs:AngularFirestore) {
    this.reviewForm = formBuilder.group({
      rating: ['', Validators.compose([Validators.required])],
      review: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReviewPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewCanEnter(){
    if(this.authProvider.getUser() == null){
      return false;
    }
    else{
      return true;
    }
  }

  seekPosition(){
    this.rating=this.reviewForm.value.rating;
  }

  addReview(){   
    console.log('MessId:'+this.navParams.get('messId')+"\nMenuId:"+this.navParams.get('menuId')); 
    if(!this.reviewForm.valid){
      console.log(this.reviewForm.value);
    } else {
       let review={
        reviewId: this.authProvider.getUser().uid,
        rating: parseFloat(this.reviewForm.value.rating),
        review: this.reviewForm.value.review
      };

      const docRef: AngularFirestoreDocument<any> = this.afs.doc(`mess/${this.navParams.get('messId')}/menu/${this.navParams.get('menuId')}/reviews/${this.authProvider.getUser().uid}`);
        
      docRef.set(review)
      .then( data => {
        this.authProvider.showBasicAlert('Alert!', "Added successfully");        
        this.navCtrl.pop();
        this.loading.dismiss();        
      })
      .catch( error => {
        this.authProvider.showBasicAlert("Failed!", error.message);
        this.navCtrl.pop();
        this.loading.dismiss();
        console.log("Failed!", error.message);
      });
        
      this.loading = this.loadingCtrl.create({ dismissOnPageChange: true });
      this.loading.present();
    }
  }
}
