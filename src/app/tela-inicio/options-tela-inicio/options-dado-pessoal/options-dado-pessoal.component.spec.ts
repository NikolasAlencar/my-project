import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsDadoPessoalComponent } from './options-dado-pessoal.component';

describe('OptionsDadoPessoalComponent', () => {
  let component: OptionsDadoPessoalComponent;
  let fixture: ComponentFixture<OptionsDadoPessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsDadoPessoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsDadoPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
