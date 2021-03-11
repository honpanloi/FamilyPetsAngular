import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingRequestsComponent } from './view-pending-requests.component';

describe('ViewPendingRequestsComponent', () => {
  let component: ViewPendingRequestsComponent;
  let fixture: ComponentFixture<ViewPendingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPendingRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPendingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
