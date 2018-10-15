import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { URL_SERVICIOS } from "../../config/url.service";


@Injectable()
export class LoginProvider {

  toke:string="";
  datos = {
      TOKEN:""
  }

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  autenticar(data){
    return new Promise((resolve, reject) => {
    this.http.post(URL_SERVICIOS+'auth/autenticar', JSON.stringify(data), {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
      .subscribe(res => {

        resolve(res);

      }, (err) => {
        reject(err);
      });
    });
  }

}
