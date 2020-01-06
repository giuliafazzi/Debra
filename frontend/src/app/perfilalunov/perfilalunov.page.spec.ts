import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilalunovPage } from './perfilalunov.page';

describe('PerfilalunovPage', () => {
  let component: PerfilalunovPage;
  let fixture: ComponentFixture<PerfilalunovPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilalunovPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilalunovPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
