import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//import { CONSTANTS } from '../constant';
/*
  Generated class for the GeoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeoProvider {
  result: any;
  posts : any;
  constructor(public http: HttpClient) {
    console.log('Hello GeoProvider Provider');
  }

  login( loc: string) {
    // const body = new HttpParams()
    //   .set('location', loc)
    //   .set('ip', '192.58.6.255');
    //   console.log(loc);
    // var headers = new HttpHeaders();
    //headers.set('Content-Type', 'application/x-www-form-urlencoded')
    this.http.get('http://phpdev.co.in/admin/dashboard/getlocation/'+loc).subscribe(data => {
        console.log(data);
    });
    //headers = headers.append('Accept', 'application/x-www-form-urlencoded');
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //return this.http.post(CONSTANTS.baseurl, body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
     
  }

}
