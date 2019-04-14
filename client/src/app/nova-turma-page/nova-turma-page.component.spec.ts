import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTurmaPageComponent } from './nova-turma-page.component';

describe('NovaTurmaPageComponent', () => {
  let component: NovaTurmaPageComponent;
  let fixture: ComponentFixture<NovaTurmaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaTurmaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTurmaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
