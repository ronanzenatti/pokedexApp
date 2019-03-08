import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposPokemonsPage } from './tipos-pokemons.page';

describe('TiposPokemonsPage', () => {
  let component: TiposPokemonsPage;
  let fixture: ComponentFixture<TiposPokemonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposPokemonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposPokemonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
