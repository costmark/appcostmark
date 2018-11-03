import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlmacenesProvider, ProductosProvider } from '../../providers/index.providers';


@IonicPage()
@Component({
  selector: 'page-registro-precio',
  templateUrl: 'registro-precio.html',
})
export class RegistroPrecioPage {

  almacen:string = "";
  puntoventa:string = "";
  producto:string = "";
  costo:number = 0;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _alm:AlmacenesProvider,
              public _prod:ProductosProvider) {   
           

  }
  
  obtenerPuntoVenta(){  
    this._alm.puntoVenta(this.almacen);
  }

  registrar(){
    let data = {
      fecha_pventa:"",
      costo_pventa:this.costo,
      id_producto:this.producto,
      id_usuario:"",
      id_puntoventa:this.puntoventa
    }
    console.log(data);
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPrecioPage');
  }

}
