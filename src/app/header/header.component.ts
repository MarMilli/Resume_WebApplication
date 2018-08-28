import {Component, OnDestroy, OnInit} from '@angular/core';
import {Info} from './info';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  info: Info;

  constructor() {
    this.info = new Info(
      'Марина Николаевна Коротенко',
      'assets/image/design/logo.png',
    );

  }

  ngOnInit() {
  }
}
