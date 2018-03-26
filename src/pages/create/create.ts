import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Menu } from '../../models/model';

import { AuthProvider } from '../../providers/auth/auth';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  
  private menu: Menu;
  private loading: Loading;
  private menuForm:FormGroup;

  constructor(public navCtrl: NavController, 
  public loadingCtrl: LoadingController,
  public navParams: NavParams,
  public formBuilder: FormBuilder, 
  private authProvider:AuthProvider,
  private afs:AngularFirestore) {
    this.menuForm = formBuilder.group({
      menuType: ['', Validators.compose([Validators.required])],
      menuCategory: ['', Validators.compose([Validators.required])],
      menuName: ['', Validators.compose([Validators.required])],
      timeFrom: ['', Validators.compose([Validators.required])],
      timeTo: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      rate: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  ionViewCanEnter(){
    if(this.authProvider.getUser() == null){
      return false;
    }
    else{
      return true;
    }
  }

  addMenu(){    
    if(!this.menuForm.valid){
      console.log(this.menuForm.value);
    } else {
      this.menu={
        menuId: this.afs.createId(),
        menuType: this.menuForm.value.menuType,
        menuCategory: this.menuForm.value.menuCategory,
        menuName: this.menuForm.value.menuName,
        timeFrom: new Date(this.menuForm.value.timeFrom),
        timeTo: new Date(this.menuForm.value.timeTo),
        description: this.menuForm.value.description,
        rate: parseFloat(this.menuForm.value.rate)
      };

      const docRef: AngularFirestoreDocument<any> = this.afs.doc(`mess/${this.authProvider.getUser().uid}/menu/${this.menu.menuId}`);
        
      docRef.set(this.menu)
      .then( data => {
        this.authProvider.showBasicAlert('Alert!', "Added successfully");        
        this.menuForm.reset();
        this.loading.dismiss();        
      })
      .catch( error => {
        this.authProvider.showBasicAlert("Failed!", error.message);
        this.menuForm.reset();
        this.loading.dismiss();
        console.log("Failed!", error.message);
      });
        
      this.loading = this.loadingCtrl.create({ dismissOnPageChange: true });
      this.loading.present();
    }
  }
}
