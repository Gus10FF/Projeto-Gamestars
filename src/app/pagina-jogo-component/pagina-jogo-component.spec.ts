import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaJogoComponent } from './pagina-jogo-component';

describe('PaginaJogoComponent', () => {
  let component: PaginaJogoComponent;
  let fixture: ComponentFixture<PaginaJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaJogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaJogoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
