import { Apartment } from './../core/models/apartment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  url : string = "http://localhost:3000/apartments";
  constructor(private _http:HttpClient) { }
  getAll() : Observable<Apartment[]>{
    return this._http.get<Apartment[]>(this.url);
  }
  getApartmentById(id:number) : Observable<Apartment>{
    return this._http.get<Apartment>(this.url +"/" + id);
  }
  addApartment(r:Apartment) : Observable<Apartment>{
    return this._http.post<Apartment>(this.url,r);
  }
  updateApartment(r:Apartment) : Observable<Apartment>{
    return this._http.put<Apartment>(this.url+"/" + r.id,r);
  }
  deleteApartment(id:number):Observable<Apartment>{
    return this._http.delete<Apartment>(this.url+"/" + id);
  }
}
