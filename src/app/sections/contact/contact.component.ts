import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profile } from '../../data/profile';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  p = profile;

  constructor(private toast: ToastService) { }

  submit(form: NgForm) {
    if (form.invalid) {
      // reveal all errors if user hits submit prematurely
      Object.values(form.controls).forEach(c => c.markAsTouched());
      return;
    }

    // TODO: send to backend
    // this.http.post('/api/contact', form.value).subscribe(...)

    this.toast.show({
      type: 'success',
      title: 'Notification',
      message: 'Thanks for reaching out! (This will be wired to backend later)',
      duration: 3000
    });

    form.resetForm(); // clear the form after success
  }
}
