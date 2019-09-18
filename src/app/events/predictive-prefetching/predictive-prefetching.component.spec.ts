import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictivePrefetchingComponent } from './predictive-prefetching.component';

describe('PredictivePrefetchingComponent', () => {
  let component: PredictivePrefetchingComponent;
  let fixture: ComponentFixture<PredictivePrefetchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictivePrefetchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictivePrefetchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
