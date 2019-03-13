import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbasaurPage } from './bulbasaur.page';

describe('BulbasaurPage', () => {
  let component: BulbasaurPage;
  let fixture: ComponentFixture<BulbasaurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulbasaurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbasaurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
