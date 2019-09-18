import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerizacionAngularComponent } from './dockerizacion-angular.component';

describe('DockerizacionAngularComponent', () => {
  let component: DockerizacionAngularComponent;
  let fixture: ComponentFixture<DockerizacionAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockerizacionAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerizacionAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
