import { Residence } from './../core/models/residence';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //une seule instance pour tous
})
export class ResidenceService {

  url : string = "http://localhost:3000/residences";
  constructor(private _http:HttpClient) { }
  getAllstatique() : Residence[]{
    return [
      {"id":1,"name": "El fel","address":"Borj Cedria",
          "image":"../../assets/images/R1.jpeg", "status": "Disponible"},
      {"id":2,"name": "El yasmine",
          "address":"Ezzahra","image":"../../assets/images/R2.jpg", "status":
          "Disponible" },
          {"id":3,"name": "El Arij",
          "address":"Rades","image":"../../assets/images/R3.jpg", "status":
          "Vendu"},
          {"id":4,"name": "El Anber","address":"inconnu",
          "image":"../../assets/images/R4.jpg", "status": "En Construction"}

      ]
  }
  getAll() : Observable<Residence[]>{
    return this._http.get<Residence[]>(this.url);
  }
  getResidenceById(id:number) : Observable<Residence>{
    return this._http.get<Residence>(this.url +"/" + id);
  }
  addResidence(r:Residence) : Observable<Residence>{
    return this._http.post<Residence>(this.url,r);
  }
  updateResidence(r:Residence) : Observable<Residence>{
    return this._http.put<Residence>(this.url+"/" + r.id,r);
  }
  deleteResidence(id:number):Observable<Residence>{
    return this._http.delete<Residence>(this.url+"/" + id);
  }
}
