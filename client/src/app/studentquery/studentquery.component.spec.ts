import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentqueryComponent } from './studentquery.component';

describe('StudentqueryComponent', () => {
  let component: StudentqueryComponent;
  let fixture: ComponentFixture<StudentqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
