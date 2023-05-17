import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitoComponent } from './exito.component';

describe('ExitoComponent', () => {
  let component: ExitoComponent;
  let fixture: ComponentFixture<ExitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExitoComponent]
    });
    fixture = TestBed.createComponent(ExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
