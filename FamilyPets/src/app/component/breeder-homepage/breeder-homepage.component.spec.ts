import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreederHomepageComponent } from './breeder-homepage.component';

describe('BreederHomepageComponent', () => {
  let component: BreederHomepageComponent;
  let fixture: ComponentFixture<BreederHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreederHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreederHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
