import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeUserExpComponent } from './edite-user-exp.component';

describe('EditeUserExpComponent', () => {
  let component: EditeUserExpComponent;
  let fixture: ComponentFixture<EditeUserExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeUserExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeUserExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
