import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTarjetasComponent } from './mis-tarjetas.component';

describe('MisTarjetasComponent', () => {
  let component: MisTarjetasComponent;
  let fixture: ComponentFixture<MisTarjetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisTarjetasComponent]
    });
    fixture = TestBed.createComponent(MisTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
