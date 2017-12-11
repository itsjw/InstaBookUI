import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {UserAccountLogin} from '../user-account-login';
import {User} from '../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user : User;
  userAccountLogin : UserAccountLogin;
  status :any;
  loginMessage : string;
  constructor(
    private homeService:HomeService,
    private router: Router
    ) { }

    ngOnInit() {
      this.userAccountLogin = new UserAccountLogin();
    }

    //http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
    authenticateUserAccount(){
     this.router.navigate(['userAccount']);
     /* 
     this.homeService.authenticateUserAccount(this.userAccountLogin)
      .subscribe(response =>  
        {
           if(response.userId == 0){
              alert('wrong password');
          }else{
             this.homeService.setLoginUser(response);
             this.router.navigate(['userAccount']);
          }
        }
        
      )
      */

    }

    createUserAccount(){

    }

}
