import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-list',
  standalone: true,
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css'],
  imports: [CommonModule]
})
export class ActionListComponent {
  @Input() actions: any[] = [];
}
