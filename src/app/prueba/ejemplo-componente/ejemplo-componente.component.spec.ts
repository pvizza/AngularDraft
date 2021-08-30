import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploComponenteComponent } from './ejemplo-componente.component';

describe('EjemploComponenteComponent', () => {
  let component: EjemploComponenteComponent;
  let fixture: ComponentFixture<EjemploComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
