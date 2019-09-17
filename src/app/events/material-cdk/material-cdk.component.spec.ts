import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCdkComponent } from './material-cdk.component';

describe('MaterialCdkComponent', () => {
  let component: MaterialCdkComponent;
  let fixture: ComponentFixture<MaterialCdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
