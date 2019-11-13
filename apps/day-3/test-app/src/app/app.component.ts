import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {
      name: 'Shyam',
      email: 'shyam@gmail.com'
    },
    {
      name: 'Krish',
      email: 'krish@gmail.com'
    },
    {
      name: 'Amar',
      email: 'amar@gmail.com'
    }
  ];

}
