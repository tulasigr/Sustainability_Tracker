import { Component } from '@angular/core';
import { ActionFormComponent } from './action-form/action-form.component';
import { ActionListComponent } from './action-list/action-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ActionFormComponent, ActionListComponent]
})
export class AppComponent {
  actions = [
    { id: 1, action: 'Carpooling', date: '2025-01-08', points: 50 }
  ];

  addAction(newAction: any) {
    const newId = this.actions.length ? this.actions[this.actions.length - 1].id + 1 : 1;
    this.actions.push({ id: newId, ...newAction });
  }
}
