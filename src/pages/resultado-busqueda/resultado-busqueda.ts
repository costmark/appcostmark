import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/index.providers';



@IonicPage()
@Component({
  selector: 'page-resultado-busqueda',
  templateUrl: 'resultado-busqueda.html',
})
export class ResultadoBusquedaPage {

  producto:string = "";

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                public _prodProvider: ProductosProvider) {

        let idProd = this.navParams.get("producto"); 
        this.producto = idProd['id_producto'];
        this._prodProvider.cargar_preciosdeventa(this.producto);

    
    
  }



  ionViewDidLoad() {
    
  }

}
