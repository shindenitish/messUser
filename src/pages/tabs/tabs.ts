import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
// import { CreatePage } from '../create/create';
import { ProfilePage } from '../profile/profile';
// import { ArchievePage } from '../archieve/archieve';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  // tab2Root = CreatePage;
  tab3Root = ProfilePage;
  // tab4Root = ArchievePage;

  constructor(private menu:MenuController) {
    this.menu = menu;
    this.menu.enable(true, 'myMenu')
  }
}
