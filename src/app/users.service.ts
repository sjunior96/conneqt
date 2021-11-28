import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './users/shared/user';

const urlBase = "http://localhost:5050/api";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${urlBase}/Users/getAllUsers`);
  }

  getUserById() {
    return this.http.get<User>(`${urlBase}/Users/getUser`);
  }

  registerUser(user: User) {
    return this.http.post<User>(`${urlBase}/Users`, user);
  }
}