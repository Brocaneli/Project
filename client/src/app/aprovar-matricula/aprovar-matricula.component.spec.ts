import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarMatriculaComponent } from './aprovar-matricula.component';

describe('AprovarMatriculaComponent', () => {
  let component: AprovarMatriculaComponent;
  let fixture: ComponentFixture<AprovarMatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarMatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
