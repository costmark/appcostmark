import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductosProvider } from '../../providers/index.providers';
import { FiltrosPage } from '../index.pages';



@IonicPage()
@Component({
  selector: 'page-resultado-busqueda',
  templateUrl: 'resultado-busqueda.html',
})
export class ResultadoBusquedaPage {

  pageFilter:FiltrosPage;

  producto:string = "";

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                public _prodProvider: ProductosProvider,
                public modalCtrl: ModalController) {

        let idProd = this.navParams.get("producto"); 
        this.producto = idProd['id_producto'];
        this._prodProvider.cargar_preciosdeventa(this.producto);
        
        
        
    
  }


  filtros(){
      let profileModal = this.modalCtrl.create(FiltrosPage);
      

      profileModal.onDidDismiss(data =>{
        console.log(data['nombre_almacen']);
        this._prodProvider.lista_productos.filter(nombre_almacen => data['nombre_almacen']);
        console.log(this._prodProvider.lista_productos);
        
      })

      profileModal.present();
  }


  ionViewDidLoad() {
    
  }
  
}
