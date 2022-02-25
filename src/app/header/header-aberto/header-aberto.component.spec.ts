import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAbertoComponent } from './header-aberto.component';

describe('HeaderAbertoComponent', () => {
  let component: HeaderAbertoComponent;
  let fixture: ComponentFixture<HeaderAbertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAbertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
