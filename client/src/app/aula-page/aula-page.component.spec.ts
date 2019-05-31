import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaPageComponent } from './aula-page.component';

describe('AulaPageComponent', () => {
  let component: AulaPageComponent;
  let fixture: ComponentFixture<AulaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
