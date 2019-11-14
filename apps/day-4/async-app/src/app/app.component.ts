import { Component, OnInit } from '@angular/core';

import { getUser } from './cb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'async-app';

  ngOnInit() {
    getUser('ram', (err, user) => {
      if (err) {
        console.log('Error:', err);
        return;
      }

      console.log('user1:', user);
    });
  }

}
