import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResolvedRequestsComponent } from './view-resolved-requests.component';

describe('ViewResolvedRequestsComponent', () => {
  let component: ViewResolvedRequestsComponent;
  let fixture: ComponentFixture<ViewResolvedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResolvedRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResolvedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
