import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchurchComponent } from './addchurch.component';

describe('AddchurchComponent', () => {
  let component: AddchurchComponent;
  let fixture: ComponentFixture<AddchurchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchurchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
