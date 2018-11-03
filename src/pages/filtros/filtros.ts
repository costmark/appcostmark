import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filtros',
  templateUrl: 'filtros.html',
})
export class FiltrosPage {

  data:{} = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltrosPage');
  }

  cerrarmodal(){
    this.data = {
      'nombre_almacen':'ALKOSTO'
    }
    this.viewCtrl.dismiss(this.data);
  }

}
