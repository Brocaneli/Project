import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaqueryComponent } from './turmaquery.component';

describe('TurmaqueryComponent', () => {
  let component: TurmaqueryComponent;
  let fixture: ComponentFixture<TurmaqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
