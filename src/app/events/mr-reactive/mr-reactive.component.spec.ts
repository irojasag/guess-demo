import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrReactiveComponent } from './mr-reactive.component';

describe('MrReactiveComponent', () => {
  let component: MrReactiveComponent;
  let fixture: ComponentFixture<MrReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
