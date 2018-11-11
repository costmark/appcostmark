import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { ProductosProvider } from '../../providers/index.providers';
import { FiltrosPage } from '../index.pages';


@IonicPage()
@Component({
  selector: 'page-resultado-busqueda',
  templateUrl: 'resultado-busqueda.html',
})

/* Comentario */
/* Comentado por: David Zambrano */
/* Esta clase es la encargada del controlar el resultado de la busqueda de productos realizada en la aplicacion,
  Ademas cuenta con toda la logica para realizar los filtros a los resultados obtenidos */

export class ResultadoBusquedaPage {

  pageFilter:FiltrosPage;

  producto:any;

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                public _prodProvider: ProductosProvider,
                public modalCtrl: ModalController) {

        this.producto = this.navParams.get("producto"); 
        
        this._prodProvider.cargar_preciosdeventa(this.producto['id_producto']);  
        
    
  }


  filtros(){
      let profileModal = this.modalCtrl.create(FiltrosPage);
      

      profileModal.onDidDismiss(filtro =>{
        this.filtrarArreglo(filtro);
       
      })

      profileModal.present();
  }

  filtrarArreglo(filtro){

    

    this._prodProvider.precioventa_productos = this._prodProvider.precioventa_productos.filter((pro)=>{
        
      let condicion1 = pro.nombre_almacen === filtro['nombre_almacen'] && pro.localizacion_puntoventa === filtro['clasificacion_pventa'];
        if (condicion1) {
          
          return condicion1;
        }else{
          
          
          let condicion = pro.nombre_almacen === filtro['nombre_almacen'] || pro.localizacion_puntoventa === filtro['clasificacion_pventa'];
          if (condicion) {
            
            return condicion;
            
          }else{
            
            return false;
          }

        }
        
    });
     
  }

 

  ionViewDidLoad() {
    
  }
  
}
