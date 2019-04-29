import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCicloPageComponent } from './novo-ciclo-page.component';

describe('NovoCicloPageComponent', () => {
  let component: NovoCicloPageComponent;
  let fixture: ComponentFixture<NovoCicloPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoCicloPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCicloPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
