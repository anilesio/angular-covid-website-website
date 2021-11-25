import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  baseUrl = "https://corona.lmao.ninja/v2/countries/"

  constructor(private http: HttpClient) { }

  getDados(){
    return this.http.get<any>(this.baseUrl).pipe(map((res:any)=>{
      return res
    }))
  }
  
  getDadosById(pais : any){
    return this.http.get<any>(this.baseUrl+pais).pipe(map((res:any)=>{
      return res
    }))
  }
}