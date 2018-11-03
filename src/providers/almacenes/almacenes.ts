import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.service';



@Injectable()
export class AlmacenesProvider {

  lista_almacenes:any[] = [];
  lista_punventa:any[] = [];

  constructor(public http: HttpClient) {
    this.listar();
  }
  
  listar(){
    let url = URL_SERVICIOS+'almacen/listar';

    this.http.get(url).subscribe(res =>{
            
      this.lista_almacenes = res['result'];

      
    })
  }

  puntoVenta(id_almacen){

    let url = URL_SERVICIOS+'almacen/puntoventa/'+id_almacen;

    this.http.get(url).subscribe(res =>{
      console.log(res);
      
      this.lista_punventa = res['result'];
    })

  }

}
