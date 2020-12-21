import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftViewsComponent } from './swift-views.component';

describe('SwiftViewsComponent', () => {
  let component: SwiftViewsComponent;
  let fixture: ComponentFixture<SwiftViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
