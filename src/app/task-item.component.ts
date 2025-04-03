import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Додаємо FormsModule

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Додаємо FormsModule до imports
  template: `
    <li [class.completed]="task.completed">
      <input type="checkbox" [(ngModel)]="task.completed" (change)="toggleCompleted()">
      <span>{{ task.name }}</span>
      <button class="delete-btn" (click)="deleteTask()">✖</button>
    </li>
  `,
  styles: [`
    li {
      background-color: #fff;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: background 0.3s;
    }
    li.completed {
      text-decoration: line-through;
      color: gray;
      background: #e0e0e0;
    }
    input[type="checkbox"] {
      margin-right: 10px;
    }
    .delete-btn {
      background: #e74c3c;
      border: none;
      color: #fff;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .delete-btn:hover {
      background: #c0392b;
    }
  `]
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() update = new EventEmitter<Task>();
  @Output() remove = new EventEmitter<number>();

  toggleCompleted() {
    this.update.emit(this.task);
  }

  deleteTask() {
    this.remove.emit(this.task.id);
  }
}
