import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
 
let storage = new Storage(this.token);
 
export function getAuthHttp(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    noJwtError: true,
    globalHeaders: [{'Content-Type':'application/json'}],
    tokenGetter: (() => storage.get('token')),
  }), http, options);
}
