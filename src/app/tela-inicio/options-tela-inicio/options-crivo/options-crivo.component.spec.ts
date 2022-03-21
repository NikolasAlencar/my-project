import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsCrivoComponent } from './options-crivo.component';

describe('OptionsCrivoComponent', () => {
  let component: OptionsCrivoComponent;
  let fixture: ComponentFixture<OptionsCrivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsCrivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsCrivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
