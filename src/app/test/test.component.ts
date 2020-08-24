import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  greeting = '';
  name = 'Ahmed';
  constructor() {}
  ngOnInit(): void {}

  onClick(event) {
    console.log(event);
    this.greeting = 'Welcome ' + this.name;
  }
}
