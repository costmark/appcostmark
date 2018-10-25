import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.service';


@Injectable()
export class ProductosProvider {

  lista_productos:any[] = [];
  productos_filtrados:any[] = [];
  precioventa_productos:any[] = [];

  constructor(public http: HttpClient) {
    this.cargar_productos();
  }

  cargar_productos(){
    let url = URL_SERVICIOS+"pventa/listar/5";

    this.http.get(url).subscribe(res =>{
      console.log(res);
      this.lista_productos = res['data'];
      
    })

  }

  cargar_preciosdeventa(id_producto:string){
    let url = URL_SERVICIOS+"pventa/buscarpv/"+id_producto;

    this.http.get(url).subscribe(res =>{
      console.log(res);
      this.precioventa_productos = res['result'];
    })

  }

  buscar_producto(termino:string){
    let url = URL_SERVICIOS+"productos/buscar/"+termino;

    this.http.get(url).subscribe(res =>{
      console.log(res);
      this.productos_filtrados = res['result'];
      
    })

  }

}
