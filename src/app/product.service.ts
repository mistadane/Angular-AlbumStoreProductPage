import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  private _albumUrl:string = '../assets/album.json';

  getAlbum (id:number):Observable<Object> {
    return this._http.get(this._albumUrl)
  }

  constructor(private _http: Http) { }

}
