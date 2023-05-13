import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoSecundarioComponent } from './encabezado-secundario.component';

describe('EncabezadoSecundarioComponent', () => {
  let component: EncabezadoSecundarioComponent;
  let fixture: ComponentFixture<EncabezadoSecundarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoSecundarioComponent]
    });
    fixture = TestBed.createComponent(EncabezadoSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
