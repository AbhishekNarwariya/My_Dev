import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpopupComponent } from './studentpopup.component';

describe('StudentpopupComponent', () => {
  let component: StudentpopupComponent;
  let fixture: ComponentFixture<StudentpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentpopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
