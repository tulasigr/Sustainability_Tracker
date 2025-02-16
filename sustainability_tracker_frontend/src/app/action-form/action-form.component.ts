import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-form',
  standalone: true,
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css'],
  imports: [CommonModule, FormsModule]  // ✅ Add FormsModule
})
export class ActionFormComponent {
  @Output() actionAdded = new EventEmitter<any>();  // ✅ Sends data to parent

  action: string = '';
  date: string = '';
  points: number | null = null;

  submitForm() {  // ✅ This function is now defined
    if (this.action && this.date && this.points !== null) {
      const newAction = { action: this.action, date: this.date, points: this.points };
      this.actionAdded.emit(newAction);  // ✅ Send data to parent
      console.log("🟢 Submitted Action:", newAction);

      // ✅ Reset form fields
      this.action = '';
      this.date = '';
      this.points = null;
    } else {
      console.warn("⚠️ Please fill all fields!");
    }
  }
}
