import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";
import {Emitters} from "../emitters/emitters";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_URL = "https://employee-webserver.herokuapp.com/auth"
  private readonly TOKEN_URL = 'https://employee-webserver.herokuapp.com/auth/token'


  constructor(private http: HttpClient, private router: Router) {

  }
  errorMessage: any

  verifyEmail(){
    var email = localStorage.getItem("userEmail")
    this.http.post<any>(this.AUTH_URL + "/resent-email/" + email, {}).subscribe(res => {})
  }

  resetPassword(email: string, password: string, newPassword: string){
    this.http.post<any>(this.AUTH_URL + "/change", {email, password, newPassword})
      .subscribe(res => this.router.navigate(["/login"]))
  }


  login(email: string, password: string){
    this.http.post<any>(this.AUTH_URL + "/signin", {email, password}, {withCredentials: true}).subscribe((response) => {
      localStorage.setItem("currentUser", JSON.stringify(response))
      localStorage.setItem("initialTime", String((new Date()).getTime()));
      localStorage.removeItem("userEmail")
      this.startRefreshTokenTimer();
      this.router.navigate(["/"])
    }, (err:HttpErrorResponse) => {
      Emitters.errorEmitters.emit(JSON.stringify(err.error))

    })
  }

  register(email: string, password:string){
    this.http.post(this.AUTH_URL + "/signup", {email, password}).subscribe(res => {
      this.router.navigate(["/verify-email"])
      localStorage.setItem("userEmail", email)
    },(err:HttpErrorResponse) =>{
      Emitters.errorEmitters.emit(JSON.stringify(err.error))
    })
  }

  logout(){
    this.http.post(this.AUTH_URL + "/logout", "",{withCredentials: true}).subscribe(res => {
      localStorage.removeItem("currentUser")
      this.stopRefreshTokenTimer()

    })
  }


  refreshToken(){
    return this.http.post<any>(this.TOKEN_URL, {},{withCredentials: true}).pipe(map((resp) => {
      this.startRefreshTokenTimer()

      return resp;
    }, catchError(err => {
      if (err.status === 403){
        localStorage.removeItem("currentUser")
        localStorage.removeItem("initialTime")
      }
      return throwError(err.message)
    })))
  }

  private refreshTokenTimeout: any;

  startRefreshTokenTimer(){
    if(localStorage.getItem("currentUser")){
      var waitTime = 840000;
      var executionTime;
      var initialTime = localStorage.getItem("initialTime");

      if (initialTime === null) {
        localStorage.setItem("initialTime", String((new Date()).getTime()));
        executionTime = waitTime;
      }
      else {
        executionTime = parseInt(initialTime, 10) + waitTime - (new Date()).getTime();
        if (executionTime < 0) executionTime = 0
      }

      this.refreshTokenTimeout = setTimeout(() =>{
        this.refreshToken().subscribe()
        localStorage.removeItem("initialTime")
      }, executionTime)
    }

  }

  stopRefreshTokenTimer(){
    localStorage.removeItem("initialTime");
    clearInterval(this.refreshTokenTimeout)
  }

}
