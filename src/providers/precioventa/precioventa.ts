import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.service';


@Injectable()
export class PrecioventaProvider {

  constructor(public http: HttpClient) {
    
  }
  registrar(data:any){
    let url = URL_SERVICIOS + 'pventa/registrar';
    console.log(url);
    
    return new Promise((resolve)=>{
      this.http.post(url,data).subscribe(res =>{
        resolve(res);
      })
    })
  }

}
