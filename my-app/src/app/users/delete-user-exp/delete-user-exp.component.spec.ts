import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserExpComponent } from './delete-user-exp.component';

describe('DeleteUserExpComponent', () => {
  let component: DeleteUserExpComponent;
  let fixture: ComponentFixture<DeleteUserExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
