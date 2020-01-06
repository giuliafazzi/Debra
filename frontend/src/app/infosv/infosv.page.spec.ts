import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosvPage } from './infosv.page';

describe('InfosvPage', () => {
  let component: InfosvPage;
  let fixture: ComponentFixture<InfosvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
