import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Http } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserAccountComponent } from './user-account/user-account.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeService } from './home.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserHomeComponent } from './user-home/user-home.component';

const appRoutes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'userAccount', component : UserAccountComponent},
  {path : 'userHome', component : UserHomeComponent},
  {path : '', redirectTo: '/home', pathMatch:'full'},
  {path : '**', redirectTo: '/home', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserAccountComponent,
    HeaderComponent,
    FooterComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
