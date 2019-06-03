import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAulaComponent } from './nova-aula.component';

describe('NovaAulaComponent', () => {
  let component: NovaAulaComponent;
  let fixture: ComponentFixture<NovaAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
