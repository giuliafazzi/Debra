import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerprofessoresPage } from './verprofessores.page';

describe('VerprofessoresPage', () => {
  let component: VerprofessoresPage;
  let fixture: ComponentFixture<VerprofessoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerprofessoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerprofessoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
