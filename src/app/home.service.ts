import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserAccountLogin} from './user-account-login';
import { User} from './user'; 
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators'; 
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class HomeService {
   login : UserAccountLogin;
   private END_URL : string;
   private  VALIDATE_USER : string;
   private loginUser : User;

  constructor(private http: HttpClient) { 
    this.END_URL = 'http://localhost:8080/InstaBook/';
    this.VALIDATE_USER  = 'userAccount/validateUser';
  }

  cars = [
    'Ford','Chevrolet','Buick'
  ];


  authenticateUserAccount (userAccountLogin : UserAccountLogin) : Observable<User> {
   return this.http.post<User>(this.END_URL + this.VALIDATE_USER, {
      userName : userAccountLogin.userName,
      userPassword : userAccountLogin.userPassword 
    });
  }

  setLoginUser(loginUser : User){
    this.loginUser = loginUser;
  }

  getLoginUser() : User{
    return this.loginUser;
  }
  myData() {
    return 'This is my data, man!';
  }
 

}
