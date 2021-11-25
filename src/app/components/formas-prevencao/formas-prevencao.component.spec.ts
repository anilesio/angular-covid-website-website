import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormasPrevencaoComponent } from './formas-prevencao.component';

describe('FormasPrevencaoComponent', () => {
  let component: FormasPrevencaoComponent;
  let fixture: ComponentFixture<FormasPrevencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormasPrevencaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormasPrevencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
