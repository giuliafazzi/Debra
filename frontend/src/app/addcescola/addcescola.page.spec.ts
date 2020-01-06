import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcescolaPage } from './addcescola.page';

describe('AddcescolaPage', () => {
  let component: AddcescolaPage;
  let fixture: ComponentFixture<AddcescolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcescolaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcescolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
