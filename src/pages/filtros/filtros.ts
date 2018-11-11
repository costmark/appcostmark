import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { AlmacenesProvider } from '../../providers/index.providers';


@IonicPage()
@Component({
  selector: 'page-filtros',
  templateUrl: 'filtros.html',
})
export class FiltrosPage {

  data:{} = {};
  almacen:string;
  localizacion:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController,
              public _alm:AlmacenesProvider) {

                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltrosPage');
  }

  cerrarmodal(){
    this.data = {
      'nombre_almacen':this.almacen,
      'clasificacion_pventa':this.localizacion
    }
    this.viewCtrl.dismiss(this.data);
  }

}
