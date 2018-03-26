import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, LoadingController, Loading, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ResetPasswordPage } from '../reset-password/reset-password';

import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loading: Loading;
  
  constructor(private navCtrl: NavController,  
  private loadingCtrl: LoadingController, 
  private menu:MenuController, 
  private formBuilder: FormBuilder,
  private authProvider: AuthProvider) {
    this.menu = menu;
    this.menu.enable(false, 'myMenu')

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }
  
  createAccount(){
    this.navCtrl.push(RegisterPage);
  }
  
  loginUser(){
    if(!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then( authData => {
        if(authData.emailVerified){
        this.navCtrl.setRoot(HomePage);
        }
        else{
          this.authProvider.showBasicAlert('Alert', "Please verify your email");     
          this.loading.dismiss();   
        }
      }, error => {
        this.loading.dismiss().then(() => {
          this.authProvider.showBasicAlert('Error', error.message);        
        });
      });
  
      this.loading = this.loadingCtrl.create({ dismissOnPageChange: true, });
      this.loading.present();
    }
  }
}
