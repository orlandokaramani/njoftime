import { Component } from '@angular/core';
import { NavParams, NavController, App, ModalController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  rootNavCtrl: NavController;
  myInput: any;
  id: any;
  name: any;
  page: any;
  constructor(  
    public app: App,
    public modalCtrl: ModalController,
    public params: NavParams
  ) {
    this.myInput = "";
    this.page = 1;
    this.id = params.data.id;
    this.name = params.data.title;
    this.rootNavCtrl = params.get('rootNavCtrl');
}
}
