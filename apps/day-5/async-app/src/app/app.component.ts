import { Component, OnInit } from '@angular/core';

import { doWork } from './cb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'async-app';

  ngOnInit() {
    doWork();
  }

}
