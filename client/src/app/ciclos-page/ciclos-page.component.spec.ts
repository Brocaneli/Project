import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosPageComponent } from './ciclos-page.component';

describe('CiclosPageComponent', () => {
  let component: CiclosPageComponent;
  let fixture: ComponentFixture<CiclosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiclosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
