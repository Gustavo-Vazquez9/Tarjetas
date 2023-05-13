import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarTarjetaProcesoComponent } from './solicitar-tarjeta-proceso.component';

describe('SolicitarTarjetaProcesoComponent', () => {
  let component: SolicitarTarjetaProcesoComponent;
  let fixture: ComponentFixture<SolicitarTarjetaProcesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitarTarjetaProcesoComponent]
    });
    fixture = TestBed.createComponent(SolicitarTarjetaProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
