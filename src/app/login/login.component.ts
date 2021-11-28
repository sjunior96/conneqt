import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRequest } from '../auth/shared/auth-request';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  loginForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.createForm(new AuthRequest());
  }

  createForm(authRequest: AuthRequest): void {
    this.loginForm = new FormGroup({
      email: new FormControl(authRequest.email),
      password: new FormControl(authRequest.password),
    });
  }

  loginUser(): void {
    this.userService.loginUser(this.loginForm.value).subscribe(user => {
      console.log(user);
      this.router.navigate(["/"]);
    });
  }

}
