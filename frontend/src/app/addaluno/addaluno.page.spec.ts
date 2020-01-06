import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalunoPage } from './addaluno.page';

describe('AddalunoPage', () => {
  let component: AddalunoPage;
  let fixture: ComponentFixture<AddalunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddalunoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddalunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
