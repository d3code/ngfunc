import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfuncComponent } from './ngfunc.component';

describe('NgfuncComponent', () => {
  let component: NgfuncComponent;
  let fixture: ComponentFixture<NgfuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgfuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
