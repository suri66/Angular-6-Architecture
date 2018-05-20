import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any[] = [
    { id: 1, name: 'Schedule', routerLink: '/task/schedule' },
    { id: 2, name: 'Threshold', routerLink: '/task/threshold' },    
  ];
  constructor() { }

  ngOnInit() {
  }
}
