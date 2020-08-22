import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {}
  public successClass = 'text-success';
  public hasError = true;
  public hasSpetial = true;

  public messageClass = {
    'text-error': this.hasError,
    'text-spetial': this.hasSpetial,
  };
  ngOnInit(): void {}
}
