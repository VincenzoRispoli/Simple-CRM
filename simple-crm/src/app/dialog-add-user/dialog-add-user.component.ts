import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { FirebaseServiceService } from '../firebase-service/firebase-service.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatDateRangePicker, MatProgressBarModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {

  }
  firebase = inject(FirebaseServiceService);
  user: User = new User();
  birthDate: Date | any;
  loading = false;

  saveUser() {
    this.loading = true
    this.user.birthDate = this.birthDate ? this.birthDate.getTime() : '';
    this.firebase.addUser(this.user.toJSON());
    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close(this)
    }, 300);
    console.log("this current user", this.user);
  }
}
