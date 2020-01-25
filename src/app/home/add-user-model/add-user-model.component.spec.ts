import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserModelComponent } from './add-user-model.component';

describe('AddUserModelComponent', () => {
  let component: AddUserModelComponent;
  let fixture: ComponentFixture<AddUserModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
