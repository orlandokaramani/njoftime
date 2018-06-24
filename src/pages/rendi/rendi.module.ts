import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RendiPage } from './rendi';

@NgModule({
  declarations: [
    RendiPage,
  ],
  imports: [
    IonicPageModule.forChild(RendiPage),
  ],
})
export class Module {}
