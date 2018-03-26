import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { NavController, Loading, LoadingController, MenuController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';

import { LoginPage } from '../login/login';

import { User } from '../../models/model';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private signupForm: FormGroup;
  private loading: Loading;
  
  private user: User={
    userId:'',
    userName:'',
    email:'',
    contact: null,
    address: null
  };

  constructor(public nav: NavController,
  public authProvider: AuthProvider, 
  public formBuilder: FormBuilder, 
  public loadingCtrl: LoadingController, 
  public menu: MenuController,
  private afs: AngularFirestore) {   
    
    this.menu = menu;
    this.menu.enable(false, 'myMenu');
    
    this.signupForm = formBuilder.group({
      userName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z\\s]*$')])],
      email:    ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],      
      contact:  ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      address: [''],
      city: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z\\s]*$')])]
    });
  }

  signupUser(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.authProvider.registerUser(this.signupForm.value.email, this.signupForm.value.password)
      .then((user) => {
        this.addUser(user);
      }, (error) => {
        this.loading.dismiss().then( () => {
          this.authProvider.showBasicAlert('Registration failed!', error.message);        
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  addUser(user){

    this.user.userId=user.uid;
    this.user.userName=this.signupForm.value.userName;
    this.user.email=this.signupForm.value.email;
    this.user.contact=this.signupForm.value.contact;
    this.user.address={
      address:this.signupForm.value.address,
      city:this.signupForm.value.city
    };

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${user.uid}`);
    
    userRef.set(this.user)
    .then( data => {
      this.authProvider.getUser().updateProfile({
        displayName: this.user.userName,
        photoURL: ""
      })
      .then( data=> {
        this.authProvider.sendVerfication()
        .then( data => {
          this.nav.setRoot(LoginPage);
          this.authProvider.showBasicAlert('Registered successfully!', "Please verify your email id to use services.");        
        })
        .catch( error => {
          this.authProvider.showBasicAlert("Verification link sending Failed!", error.message);
          console.log("Verification link sending Failed!", error.message);
        })
      })
      .catch( error =>{
        this.authProvider.showBasicAlert("Profile update failed!", error.message);
        console.log("Profile update failed!", error.message);
      });
    })
    .catch( error => {
      this.authProvider.showBasicAlert("Database update Failed!", error.message);
      console.log("Database update Failed!", error.message);
    });    
  }
}