import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaMatriculaComponent } from './nova-matricula.component';

describe('NovaMatriculaComponent', () => {
  let component: NovaMatriculaComponent;
  let fixture: ComponentFixture<NovaMatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaMatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
