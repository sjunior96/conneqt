import { Component, Input, OnInit } from '@angular/core';
import { ItemProps } from '../app.component';

@Component({
  selector: 'app-list-item-mobile',
  templateUrl: './list-item-mobile.component.html',
  styleUrls: ['./list-item-mobile.component.css']
})
export class ListItemMobileComponent {

  @Input() item: ItemProps = {};

}
