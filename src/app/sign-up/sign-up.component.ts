import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../users/shared/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UsersService, private router: Router) { }

  signUpForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.createForm(new User());
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  createForm(user: User): void {
    this.signUpForm = new FormGroup({
      companyName: new FormControl(user.companyName, Validators.required),
      segment: new FormControl(user.segment),
      numberOfUsers: new FormControl(user.numberOfUsers),
      fullName: new FormControl(user.fullName),
      email: new FormControl(user.email),
      telephone: new FormControl(user.telephone),
      password: new FormControl(user.password),
    });
  }

  registerUser(): void {
    this.userService.registerUser(this.signUpForm.value).subscribe(user => {
      console.log(user);
      this.router.navigate(["/thanks-for-signing-up"]);
    });
  }

}
