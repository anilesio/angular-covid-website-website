import { SignupModel } from './../interfaces/signup.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class SignUpService {


    baseUrl = "http://localhost:3001/user"

    constructor(private http: HttpClient) { }

    postSignup(data: SignupModel): Observable<SignupModel> {
        return this.http.post<SignupModel>(this.baseUrl, data)
    }

}