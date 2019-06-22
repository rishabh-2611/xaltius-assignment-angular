import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  user:{
    name : String,
    age : number
  };

  // Setters & Getters methods
  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  // HttpHeaders const
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };


  // POST request
  getMessage(): Observable<any> {
    return this.http.post(
      "http://localhost:8080/SpringMVC/process/age",
      this.getUser(),
      this.httpOptions
    );
  }
}
