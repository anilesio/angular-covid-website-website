import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaleConnoscoService {

  baseUrl = "http://localhost:3001/"

  constructor(private http: HttpClient) { }

  postMensagem(data: any){
    return this.http.post<any>(this.baseUrl+'faleConnosco', data).pipe(map((res:any)=>{
      return res
    }))
  }

  getMensagem(){
    return this.http.get<any>(this.baseUrl+'faleConnosco').pipe(map((res:any)=>{
      return res
    }))
  }

  getAssunto(){
    return this.http.get<any>(this.baseUrl+'assuntoFaleConnosco').pipe(map((res: any)=>{
      return res
    }))
  }

 
}
