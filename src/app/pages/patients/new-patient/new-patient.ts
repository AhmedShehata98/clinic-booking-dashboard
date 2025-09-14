import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-patient',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './new-patient.html',
  styleUrl: './new-patient.css',
})
export class NewPatient {
  @Input({ required: true }) isShown: boolean = false;
  @Output() onClose = new EventEmitter();

  coverImgPreview = signal<undefined | string>(undefined);

  form = new FormGroup({
    avatar: new FormControl<File | undefined>(undefined),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    firstAddress: new FormControl(''),
    secondAddress: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    country: new FormControl(''),
    status: new FormControl(''),
    primaryDoctor: new FormControl(''),
  });

  handleClose() {
    this.onClose.emit();
  }

  handleGetAvatarImg(evt: Event) {
    const files = (evt.target as HTMLInputElement).files;

    if (!files || !files.length) {
      console.error('Error Please Select Profile Img to upload');
      return;
    }

    this.form.patchValue({
      avatar: files[0],
    });

    this.coverImgPreview.set(URL.createObjectURL(files[0]));
  }

  removeProfileCoverImg() {
    this.form.patchValue({
      avatar: undefined,
    });

    this.coverImgPreview.set(undefined);
  }
}
