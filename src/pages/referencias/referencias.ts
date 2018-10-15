import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { REFERENCIAS, AUTORES } from "../../data/data.references";

@IonicPage()
@Component({
  selector: 'page-referencias',
  templateUrl: 'referencias.html',
})
export class ReferenciasPage {

  referencia:any={};
  autor:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.referencia = REFERENCIAS;
    this.autor = AUTORES;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferenciasPage');
  }

}
