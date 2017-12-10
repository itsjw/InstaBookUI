import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {User} from '../user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  loginUser : User;
  constructor(private homeService : HomeService) { }

  ngOnInit() {
    this.loginUser = this.homeService.getLoginUser();
    console.log(this.loginUser);
  }

}
