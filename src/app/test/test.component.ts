import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = 'Ahmed';
  public url = window.location.href;
  constructor() {}

  ngOnInit(): void {}

  greetingUser() {
    return `Hello ${this.name}`;
  }
}
