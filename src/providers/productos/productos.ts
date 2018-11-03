import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.service';


@Injectable()
export class ProductosProvider {
  
  todos_productos:any[] = [];
  lista_productos:any[] = [];
  productos_filtrados:any[] = [];
  precioventa_productos:any[] = [];

  constructor(public http: HttpClient) {
    this.cargar_productos();
    this.listar_productos();
  }

  listar_productos(){
    let url = URL_SERVICIOS+"productos/listar";
    
    this.http.get(url).subscribe(res =>{
        this.todos_productos = res['result'];
    })

  }

  cargar_productos(){
    let url = URL_SERVICIOS+"pventa/listar/5";

    this.http.get(url).subscribe(res =>{
      console.log(res['data']);
      
      this.lista_productos = res['data'];
      
    })

  }

  cargar_preciosdeventa(id_producto:string){
    let url = URL_SERVICIOS+"pventa/buscarpv/"+id_producto;

    this.http.get(url).subscribe(res =>{
      
      this.precioventa_productos = res['result'];
    })

  }

  buscar_producto(termino:string){
    let url = URL_SERVICIOS+"productos/buscar/"+termino;

    this.http.get(url).subscribe(res =>{
      
      this.productos_filtrados = res['result'];
      
    })

  }

}
