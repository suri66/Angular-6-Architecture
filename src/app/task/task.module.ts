import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { ThresholdComponent } from './threshold/threshold.component';
import { TasksComponent } from './tasks/tasks.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [ThresholdComponent, TasksComponent, ScheduleComponent]
})
export class TaskModule { }
