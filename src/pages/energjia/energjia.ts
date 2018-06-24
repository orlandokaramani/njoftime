import { Component } from '@angular/core';
import { NavParams, NavController, App, ModalController, IonicPage } from 'ionic-angular';
import {Postime} from '../../assets/energjia'

import { PostPage } from '../post/post';

@IonicPage()
@Component({
  selector: 'page-energjia',
  templateUrl: 'energjia.html'

})
export class EnergjiaPage {

  rootNavCtrl: NavController;
  myInput: any;
  id: any;
  name: any;
  page: any;
  energjia = Postime;

  constructor(  
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController,
    public params: NavParams
  ) {
    this.myInput = "";
    this.page = 1;
    this.id = params.data.id;
    this.name = params.data.title;
    this.rootNavCtrl = params.get('rootNavCtrl');
    this.energjia = Postime;
}
goToPostDetail(post: any) {
  // go to the session detail page
  // and pass in the session data

  this.navCtrl.push(PostPage, post);
}
}
