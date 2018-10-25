import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ProductosProvider } from '../../providers/index.providers';
import { RegistroPrecioPage } from '../index.pages';




@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {


  registroPecio = RegistroPrecioPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public app:App,
              private _prodProvider:ProductosProvider,
              ) {
    
      
      
    
  }

  refrescar(refresh){
    
    this._prodProvider.cargar_productos();
    setTimeout(()=>{
      refresh.complete();
    }, 2000);
    
  }

  obtener(){
    // this.items = this.getItems(this.terminoBusqueda);
  }

  getItems(termino){
    console.log(termino);
    // return this.items.filter((item) => {
    //   return item.title.toLowerCase().indexOf(
    //     termino.toLowerCase()) > -1;
    // });
     
    
  }

  ionViewDidLoad() {
    
  }
  
  ionViewDidEnter() {
    
   }
   
}
