import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public hasError = true;
  public highlightColor = 'blue';
  titleStyle = {
    color: 'green',
    fontStyle: 'italic',
  };
  constructor() {}
  ngOnInit(): void {}
}
