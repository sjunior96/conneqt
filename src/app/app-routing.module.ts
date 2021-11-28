import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThanksForSigningUpComponent } from './thanks-for-signing-up/thanks-for-signing-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "thanks-for-signing-up", component: ThanksForSigningUpComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
