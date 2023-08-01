import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Auth} from "../models/auth";
import {Observable} from "rxjs";
import {Login} from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http:HttpClient) {}

  login(credentials:Auth): Observable<Login> {
    // let body = new URLSearchParams();
    // body.set("userName", credentials.username);
    // body.set("password", credentials.password);
    return this.http.post<Login>("http://localhost:8080/api/auth/login", credentials);
  }
}
