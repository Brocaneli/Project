import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratorPageComponent } from './colaborator-page.component';

describe('ColaboratorPageComponent', () => {
  let component: ColaboratorPageComponent;
  let fixture: ComponentFixture<ColaboratorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboratorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
