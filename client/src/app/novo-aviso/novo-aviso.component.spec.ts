import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAvisoComponent } from './novo-aviso.component';

describe('NovoAvisoComponent', () => {
  let component: NovoAvisoComponent;
  let fixture: ComponentFixture<NovoAvisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoAvisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
