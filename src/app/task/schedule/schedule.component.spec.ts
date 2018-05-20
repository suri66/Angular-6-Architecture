
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleComponent } from './schedule.component';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
