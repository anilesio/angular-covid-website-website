import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  baseUrl = "http://localhost:3001/noticias"

  constructor(private http: HttpClient) { }

  getNoticias(){
    return this.http.get<any>(this.baseUrl).pipe(map((res:any)=>{
      return res
    }))
  }

  getNoticiaID(id : any){
    const url = `${this.baseUrl}/${id}`
    return this.http.get<any>(url)
  }

  postNoticias(data: any){
    return this.http.post<any>(this.baseUrl, data).pipe(map((res: any)=>{
      return res
    }))
  }
}