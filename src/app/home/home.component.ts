import { Component, OnInit } from '@angular/core';
import { ItemProps } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  topics: string[] = [
    "One on one and group meetings",
    "Record Meetings",
    "Screen shares",
    "Share control over screens",
    "Schedule and send reminders",
  ];

  globalReseller: ItemProps = {
    name: "John Appleseed - Authorized Reseller ",
    site: "https://www.eldorado.org.br/",
    phone: "469-844-8261"
  };

  brazilResellers: ItemProps[] = [
    {
      name: "Ultratech Revendedora",
      site: "https://www.eldorado.org.br/",
      phone: "469-844-8261"
    },
    {
      name: "BlueFin",
      site: "https://www.eldorado.org.br/",
      phone: "469-844-8261"
    },
    {
      name: "Gold Comm Sistemas",
      site: "https://www.eldorado.org.br/",
      phone: "469-844-8261"
    },
    {
      name: "Centraltek",
      site: "https://www.eldorado.org.br/",
      phone: "469-844-8261"
    },
  ];

}
