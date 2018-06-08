import { Component, ViewChild } from '@angular/core';

import { MenuController, NavController, Slides } from 'ionic-angular';

import { Storage } from '@ionic/storage';


import { UserOptions } from '../../interfaces/user-options';
import { RegisterForm } from '../../interfaces/register-form';
import { NgForm } from '@angular/forms';
import { UserData } from '../../providers/user-data';
import { SignupPage } from '../signup/signup';


import { HomePage } from '../home/home';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage {
  showSkip = true;
  login: UserOptions = { email: '' };
  register: RegisterForm = { emer: '', mbiemer: '', email: '', gjinia: '' }
  submitted = false;
  gjinia: string = "f";
	@ViewChild('slides') slides: Slides;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public storage: Storage,
    public userData: UserData
  ) { }

   startApp() {
    this.navCtrl.push(HomePage).then(() => {
      this.storage.set('hasSeenTutorial', 'true');
    })
  } 

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {
    this.slides.update();
  }
  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.email);
      this.navCtrl.push(HomePage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
