import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPokemonsPage } from './lista-pokemons.page';

describe('ListaPokemonsPage', () => {
  let component: ListaPokemonsPage;
  let fixture: ComponentFixture<ListaPokemonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPokemonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPokemonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
