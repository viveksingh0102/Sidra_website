import { Component, AfterViewInit } from '@angular/core';
import * as AOS from "aos";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngAfterViewInit() {
    AOS.init();
  }

  makeCall() {
    window.location.href = 'tel:050 782 2740';
  }

  makeCall1() {
    window.location.href = 'tel:+971 50 782 2740';
  }
  makeCall2() {
    window.location.href = 'tel:+971 55 505 0856';
  }
}
