import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloqueryComponent } from './cicloquery.component';

describe('CicloqueryComponent', () => {
  let component: CicloqueryComponent;
  let fixture: ComponentFixture<CicloqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
