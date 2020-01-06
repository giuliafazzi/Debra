import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeralunosPage } from './veralunos.page';

describe('VeralunosPage', () => {
  let component: VeralunosPage;
  let fixture: ComponentFixture<VeralunosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeralunosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeralunosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
