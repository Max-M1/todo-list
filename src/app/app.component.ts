import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent, Task } from './task-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список завдань';
  newTaskName: string = '';
  
  // Оригінальний список завдань
  tasks: Task[] = [
    { id: 1, name: 'Купити молоко', completed: false },
    { id: 2, name: 'Закінчити Angular проєкт', completed: false },
    { id: 3, name: 'Піти на тренування', completed: true }
  ];

  // Фільтр: який статус завдання відображати
  filter: string = 'all'; // 'all', 'completed', 'pending'

  // Додавання нового завдання
  addTask() {
    if (!this.newTaskName.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      name: this.newTaskName,
      completed: false
    };

    this.tasks.push(newTask);
    this.newTaskName = '';
  }

  // Оновлення статусу завдання
  onTaskUpdate(updatedTask: Task) {
    this.tasks = this.tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
  }

  // Видалення завдання
  onTaskRemove(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  // Фільтрація завдань за статусом
  get filteredTasks() {
    if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (this.filter === 'pending') {
      return this.tasks.filter(task => !task.completed);
    } else {
      return this.tasks;
    }
  }

  // Оновлення фільтра
  setFilter(filter: string) {
    this.filter = filter;
  }
}
