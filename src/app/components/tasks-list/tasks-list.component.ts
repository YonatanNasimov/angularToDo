import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from "../../models/taskModel.interface"


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) =>
      this.tasks = tasks)
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(() =>
        this.tasks = this.tasks.filter(allTasks => allTasks.id !== task.id))
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    console.log(task);
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) =>
      this.tasks.push(task));
    console.log(task)
  }
}
