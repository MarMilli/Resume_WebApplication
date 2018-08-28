import {Component, OnDestroy, OnInit} from '@angular/core';
import {InfoEvent} from './infoevent';
import {Info} from '../header/info';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  infoevent: InfoEvent;
  dateToday: Date;
  dateEnd: Date;
  seconds: number;
  minutes: number;
  hours: number;
  timerId: number;
  days: number;
  daysValue: string;
  hoursValue: string;
  minutesValue: string;
  secondsValue: string;

  constructor() {this.infoevent = new InfoEvent(
    'До дня, когда меня пригласят на работу в Сибирские интеграционные системы, осталось:',
  ); }

  ngOnInit() {  this.timerId = window.setInterval(() => {
    this.dateToday = new Date();
    this.dateEnd = new Date(2018, 8, 13);
    this.seconds = (this.dateEnd.valueOf() - this.dateToday.valueOf()) / 1000; // оставшееся время в секундах
    if (this.seconds > 0) {
      this.minutes = this.seconds / 60; // определяем кол-во минут до истечения таймера
      this.hours = this.minutes / 60; // определяем код-во часов до истечения таймера
      this.days = this.hours / 24; // определяем кол-во дней
      this.hours = (this.days - Math.floor(this.days)) * 24; // считаем кол-во оставшихся часов в текущем дне
      this.days = Math.floor(this.days); // целое кдо-во дней до истечения таймера
      this.minutes = (this.hours - Math.floor(this.hours)) * 60; // подсчитываем кол-во оставшихся минут в текущем часе
      this.hours = Math.floor(this.hours); // целое кол-во часов до истечения таймера
      // if (this.hours < 10) { this.hours = '0' + this.hours; } // пыталась добавить 0 слева, но пока не получилось
      this.seconds = Math.floor((this.minutes - Math.floor(this.minutes)) * 60); // подсчитываем оставшиеся секунды в текущей минуте
      // if (this.seconds < 10) { this.seconds  = '0' + this.seconds; }
      this.minutes = Math.floor(this.minutes); // целое кол-во минут до истечения таймера
      // if (this.minutes < 10) { this.minutes = '0' + this.minutes; }
      // склоняем слова в зависомости от значения
      // дни
      if (this.days === 1 || this.days === 21 || this.days === 31) {
        this.daysValue = 'День';
      } else if
      (this.days === 2 || this.days === 3 || this.days === 4 || this.days === 22 || this.days === 23 || this.days === 24) {
        this.daysValue = 'Дня';
      } else if
      ( this.days === 0 || (this.days >= 5 && this.days <= 20) || (this.days >= 25 && this.days <= 30)) {
        this.daysValue = 'Дней';
      } else {
        alert('Странный результат, невероятно странный');
      }
      // часы
      if (this.hours === 1 || this.hours === 21) {
        this.hoursValue = 'Час';
      } else if
      (this.hours === 2 || this.hours === 3 || this.hours === 4 || this.hours === 22 || this.hours === 23 || this.hours === 24) {
        this.hoursValue = 'Часа';
      } else if
      (this.hours === 0 || (this.hours >= 5 && this.hours <= 20)) {
        this.hoursValue = 'Часов';
      } else {
        alert('Странный результат, невероятно странный');
      }
      // минуты
      if (this.minutes === 1 || this.minutes === 21 || this.minutes === 31 || this.minutes === 41 || this.minutes === 51) {
        this.minutesValue = 'Минута';
      } else if
      (this.minutes === 2 || this.minutes === 3 || this.minutes === 4 || this.minutes === 22 || this.minutes === 23 ||
        this.minutes === 24 || this.minutes === 32 || this.minutes === 33 || this.minutes === 34 || this.minutes === 42 ||
        this.minutes === 43 || this.minutes === 44 || this.minutes === 52 || this.minutes === 53 || this.minutes === 54) {
        this.minutesValue = 'Минуты';
      } else if
      ( this.minutes === 0 || (this.minutes >= 5 && this.minutes <= 20) || (this.minutes >= 25 && this.minutes <= 30) ||
        (this.minutes >= 35 && this.minutes <= 40) || (this.minutes >= 45 && this.minutes <= 50) ||
        (this.minutes >= 55 && this.minutes <= 60)) {
        this.minutesValue = 'Минут';
      } else {
        alert('Странный результат, невероятно странный');
      }
      // секунды
      if (this.seconds === 1 || this.seconds === 21 || this.seconds === 31 || this.seconds === 41 || this.seconds === 51) {
        this.secondsValue = 'Секунда';
      } else if
      (this.seconds === 2 || this.seconds === 3 || this.seconds === 4 || this.seconds === 22 || this.seconds === 23 ||
        this.seconds === 24 || this.seconds === 32 || this.seconds === 33 || this.seconds === 34 || this.seconds === 42 ||
        this.seconds === 43 || this.seconds === 44 || this.seconds === 52 || this.seconds === 53 || this.seconds === 54) {
        this.secondsValue = 'Секунды';
      } else if
      (this.seconds === 0 || (this.seconds >= 5 && this.seconds <= 20) || (this.seconds >= 25 && this.seconds <= 30) ||
        (this.seconds >= 35 && this.seconds <= 40) || (this.seconds >= 45 && this.seconds <= 50) ||
        (this.seconds >= 55 && this.seconds <= 60)) {
        this.secondsValue = 'Секунд';
      } else {
        alert('Странный результат, невероятно странный');
      }
    } else {
      alert('Время истекло');
      clearInterval(this.timerId);
    }
  }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }


}
