import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarAlunosComponent } from './aprovar-alunos.component';

describe('AprovarAlunosComponent', () => {
  let component: AprovarAlunosComponent;
  let fixture: ComponentFixture<AprovarAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
