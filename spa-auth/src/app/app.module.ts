import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {HttpClientModule } from '@angular/common/http';
import { RouterModule , Routes} from '@angular/router';
import  {  FormsModule, ReactiveFormsModule} from '@angular/forms'
import {enableProdMode} from '@angular/core';
import { RegisterComponent } from './register/register.component';

const appRoute:Routes=[
  {path: '', component:SignInComponent},
  {path:'register', component:RegisterComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
