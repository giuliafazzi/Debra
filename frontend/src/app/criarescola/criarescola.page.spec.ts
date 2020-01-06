import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarescolaPage } from './criarescola.page';

describe('CriarescolaPage', () => {
  let component: CriarescolaPage;
  let fixture: ComponentFixture<CriarescolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarescolaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarescolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
