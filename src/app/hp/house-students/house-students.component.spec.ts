import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseStudentsComponent } from './house-students.component';

describe('HouseStudentsComponent', () => {
  let component: HouseStudentsComponent;
  let fixture: ComponentFixture<HouseStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
