import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaRecargaComponent } from './venta-recarga.component';

describe('VentaRecargaComponent', () => {
  let component: VentaRecargaComponent;
  let fixture: ComponentFixture<VentaRecargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaRecargaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaRecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
