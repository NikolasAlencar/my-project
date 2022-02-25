import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsTelaInicioComponent } from './options-tela-inicio.component';

describe('OptionsTelaInicioComponent', () => {
  let component: OptionsTelaInicioComponent;
  let fixture: ComponentFixture<OptionsTelaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsTelaInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsTelaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
