import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBreederComponent } from './navbar-breeder.component';

describe('NavbarBreederComponent', () => {
  let component: NavbarBreederComponent;
  let fixture: ComponentFixture<NavbarBreederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBreederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBreederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
