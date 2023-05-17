import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTarjetaComponent } from './tipo-tarjeta.component';

describe('TipoTarjetaComponent', () => {
  let component: TipoTarjetaComponent;
  let fixture: ComponentFixture<TipoTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoTarjetaComponent]
    });
    fixture = TestBed.createComponent(TipoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
