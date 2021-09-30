import { Component, Input, OnInit } from '@angular/core';
import { ItemProps } from '../app.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() item: ItemProps = {};

}