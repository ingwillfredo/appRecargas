import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRecargaComponent } from './info-recarga.component';

describe('InfoRecargaComponent', () => {
  let component: InfoRecargaComponent;
  let fixture: ComponentFixture<InfoRecargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRecargaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
