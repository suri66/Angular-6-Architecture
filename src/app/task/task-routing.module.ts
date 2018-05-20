import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThresholdComponent } from './threshold/threshold.component';
import { TasksComponent } from './tasks/tasks.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'threshold', component: ThresholdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
