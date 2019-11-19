import { Component, OnInit } from '@angular/core';

// import { beginDemo } from './samples/of';
// import { beginDemo } from './samples/from';
// import { beginDemo } from './samples/fromEvent';
// import { beginDemo } from './samples/take';
// import { beginDemo } from './samples/takeUntil';
// import { beginDemo } from './samples/tap';
// import { beginDemo } from './samples/zip';
// import { beginDemo } from './samples/debounceTime';
import { beginDemo } from './samples/distinctUntilChanged';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    beginDemo();
  }

}
