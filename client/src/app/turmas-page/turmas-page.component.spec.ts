import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasPageComponent } from './turmas-page.component';

describe('TurmasPageComponent', () => {
  let component: TurmasPageComponent;
  let fixture: ComponentFixture<TurmasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
