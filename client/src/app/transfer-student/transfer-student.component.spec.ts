import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferStudentComponent } from './transfer-student.component';

describe('TransferStudentComponent', () => {
  let component: TransferStudentComponent;
  let fixture: ComponentFixture<TransferStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
