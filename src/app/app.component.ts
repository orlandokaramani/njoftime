import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';


import { TutorialPage } from '../pages/tutorial/tutorial';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.template.html'
})
export class ConferenceApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu


  rootPage: any;
  rootParams: any;
  menuItems: any[] = [
    
    {
      name: 'Kreu',
      page: 'HomePage',
      params: { type: 'titles-only' }
    }
    
  ];

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public confData: ConferenceData,
    public storage: Storage,
    public splashScreen: SplashScreen
  ) {
    
    this.rootParams = this.menuItems[0].params;
    // Check if the user has already seen the tutorial
    this.storage.get('token')
      .then((token) => {
        if (token) {
          this.rootPage = TutorialPage;
        } else {
          this.rootPage = HomePage;
        }
        this.platformReady()
      });
  }

  openPage(page) {
    this.nav.setRoot(page.page, page.params);
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }


}
