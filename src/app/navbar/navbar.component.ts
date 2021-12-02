import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RESET_USER } from '../store/actions/user.actions';
import { IUserState } from '../store/reducers/user.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$: Observable<IUserState>;

  constructor(private store: Store<{ userState: IUserState; }>) {
    this.user$ = store.select("userState");
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("userState");
    this.store.dispatch(RESET_USER());
  }

}
