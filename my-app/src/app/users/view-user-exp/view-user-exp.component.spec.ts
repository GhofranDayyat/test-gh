import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserExpComponent } from './view-user-exp.component';

describe('ViewUserExpComponent', () => {
  let component: ViewUserExpComponent;
  let fixture: ComponentFixture<ViewUserExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
