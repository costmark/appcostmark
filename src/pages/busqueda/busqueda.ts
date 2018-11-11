import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/index.providers';
import { ResultadoBusquedaPage, ReferenciasPage } from '../index.pages';



@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  referencias = ReferenciasPage;
  resultadoBusqueda = ResultadoBusquedaPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _prodProvider:ProductosProvider) {
  }

  buscar_productos(ev:any){

    const valor = ev.target.value;
    console.log(valor);

    this._prodProvider.buscar_producto(valor);
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

}
