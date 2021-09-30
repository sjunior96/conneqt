import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conneqt-challenge';
}

export interface ItemProps {
  name?: string;
  site?: string;
  phone?: string;
}

