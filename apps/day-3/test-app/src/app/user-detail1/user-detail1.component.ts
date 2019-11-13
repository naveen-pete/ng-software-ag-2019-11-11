import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail1',
  templateUrl: './user-detail1.component.html',
  styleUrls: ['./user-detail1.component.css']
})
export class UserDetail1Component implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }
}
