import { Component, OnInit } from '@angular/core';
import { TaskService } from '@app/task/shared/task.service';
import { Schedule } from '@app/shared/models/tasks';
import { LoggerService } from '@app/core/logger.service';

@Component({
  selector: 'task/schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private taskService: TaskService, private logger: LoggerService) { }

  dataSource = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
  ];

  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  ngOnInit() {
    this.logger.log('Feting Schedule Data');
    this.getSchedule();
  }

  getSchedule(): void {
    this.taskService.getTask()
    .subscribe(schedules => this.dataSource = schedules || this.dataSource);
  }

}