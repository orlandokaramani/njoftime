
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { JwtHelper } from 'angular2-jwt'
import { Storage } from '@ionic/storage';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  baseUrl = 'http://localhost:50355/api/auth/';
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(public http: Http, private storage: Storage) {
    
  }
  login(model: any) {

    return this.http.post(this.baseUrl + 'login', model, this.requestOptions()).
    map(res  => {

        const user = res.json();
        if (user && user.tokenString) {
            this.storage.set('token', user.tokenString);
            this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
            console.log(this.decodedToken)
            this.userToken = user.tokenString;
        }
    })
}
private requestOptions() {
  const headers = new Headers({ 'Content-type': 'application/json' });
  return new RequestOptions({ headers });
}


}
