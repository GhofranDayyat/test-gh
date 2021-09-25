import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserExpComponent } from './list-user-exp.component';

describe('ListUserExpComponent', () => {
  let component: ListUserExpComponent;
  let fixture: ComponentFixture<ListUserExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
