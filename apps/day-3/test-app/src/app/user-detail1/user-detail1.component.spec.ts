import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetail1Component } from './user-detail1.component';

describe('UserDetail1Component', () => {
  let component: UserDetail1Component;
  let fixture: ComponentFixture<UserDetail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
