import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddescolasPage } from './addescolas.page';

describe('AddescolasPage', () => {
  let component: AddescolasPage;
  let fixture: ComponentFixture<AddescolasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddescolasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddescolasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
