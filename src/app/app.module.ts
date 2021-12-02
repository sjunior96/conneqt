import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThanksForSigningUpComponent } from './thanks-for-signing-up/thanks-for-signing-up.component';
import { HomeComponent } from './home/home.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FooterComponent } from './footer/footer.component';
import { ListItemMobileComponent } from './list-item-mobile/list-item-mobile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent,
    ThanksForSigningUpComponent,
    HomeComponent,
    ListItemComponent,
    FooterComponent,
    ListItemMobileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      userState: userReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
