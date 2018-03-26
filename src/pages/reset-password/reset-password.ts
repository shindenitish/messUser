import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  public resetPasswordForm:FormGroup;

  constructor(public authProvider: AuthProvider,
  public formBuilder: FormBuilder,
  public nav: NavController,
  public alertCtrl: AlertController) {
    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
    });
  }

  resetPassword(){
    if (!this.resetPasswordForm.valid){
      console.log(this.resetPasswordForm.value);
    } else {
      this.authProvider.resetPassword(this.resetPasswordForm.value.email)
      .then((user) => {
        this.nav.setRoot(LoginPage);
        this.authProvider.showBasicAlert('Alert', 'We just sent a reset link to your registered email id.');
      }, (error) => {
        this.authProvider.showBasicAlert('Error', error.message);
      });
    }
  }
}
