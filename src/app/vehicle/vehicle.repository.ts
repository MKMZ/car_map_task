import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from 'app/vehicle/models/vehicle';

@Injectable()
export class VehicleRepository  {
    protected rootUrl = 'https://api-portal.techgarden.pl/v0.8.10';
    constructor (protected http: Http) {}

  getCarMap(): Observable<Vehicle[]> {
    const reqUrl = `${this.rootUrl}/map`;
    return this.http.get(reqUrl, {})
      .map(res => res.json()
        .filter(item => item && item.discriminator === 'vehicle')
        .map(item => new Vehicle(item))
      ).catch(error => Observable.throw(
        error.json().error || 'Error during the process of getting Cars\' Map'
      ));
  }
}
