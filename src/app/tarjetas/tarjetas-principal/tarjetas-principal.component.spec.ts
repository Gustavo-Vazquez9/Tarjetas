import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasPrincipalComponent } from './tarjetas-principal.component';

describe('TarjetasPrincipalComponent', () => {
  let component: TarjetasPrincipalComponent;
  let fixture: ComponentFixture<TarjetasPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetasPrincipalComponent]
    });
    fixture = TestBed.createComponent(TarjetasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
