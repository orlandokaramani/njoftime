import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {Postime} from '../../assets/energjia'
/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  id: any;
  post: any;
  item: any;
  energjia = Postime;
  
  constructor( public params: NavParams,  public nav: NavController,
    public loadingCtrl: LoadingController) {

      this.post = params.data;
      this.id = params.data.id;
      this.energjia = Postime;
   
    console.log(params.data)
  }

  


}
