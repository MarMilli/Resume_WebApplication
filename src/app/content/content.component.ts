import {Component, OnInit} from '@angular/core';
import {AboutMe} from './about-me';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],


})
export class ContentComponent implements OnInit {

  aboutMe: AboutMe;
  valuerez: number;
  inputValue: string;
  constructor() {
    this.aboutMe = new AboutMe(
      ['Могу в HTML, CSS и немного в JavaScript. Ну и куда же без перечисления языков, которые я изучала в\n' +
      '            университете: С++.', 'Это все.'],
      ['Очень.', 'Очень.']);
  }

  showOrHide(a) {
    this.valuerez = a;
  }

  addSkill() {
    this.aboutMe.skills.push(this.inputValue);
    localStorage.setItem( 'skills', JSON.stringify(this.aboutMe.skills));
  }


  ngOnInit() {
      if ( localStorage.getItem('skills') != null )
      {
        this.aboutMe.skills = JSON.parse(localStorage.getItem('skills'));
      }
    }

}
