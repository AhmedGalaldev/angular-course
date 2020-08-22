import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // selector: '.app-test',
  // selector: '[app-test]',
  // templateUrl: './test.component.html',
  // template: '<div>test work from ts</div>',
  template: ` <div>works using \`\`</div> `,
  // styleUrls: ['./test.component.css'],
  styles: [
    `
      div {
        color: blue;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
