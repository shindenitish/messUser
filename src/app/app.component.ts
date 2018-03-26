import { Component, OnInit } from '@angular/core';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  rootPage:any;

  constructor(private authProvider: AuthProvider) {
  }

  ngOnInit() {
    this.authProvider.getAuthState().subscribe((user) => {
      if(user){
        if(user.emailVerified)
        {
          this.rootPage = TabsPage;
        }else{
          this.rootPage = LoginPage;  
        }
      }else{
        this.rootPage = LoginPage;  
      }
    });
  }
}

