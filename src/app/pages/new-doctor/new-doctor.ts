import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { nanoid } from 'nanoid';

type SessionItem = {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  days: string[];
};

@Component({
  selector: 'app-new-doctor',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './new-doctor.html',
  styleUrl: './new-doctor.css',
  host: {
    '[class.show]': 'isShown',
  },
})
export class NewDoctor {
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
    specialty: new FormControl(''),
    department: new FormControl(''),
    experience: new FormControl(''),
    education: new FormControl(''),
    license: new FormControl(''),
    licenseNumber: new FormControl(''),
    licenseExpiryDate: new FormControl(''),
    _days: new FormControl<string[]>([]),
    _sessionName: new FormControl<string>(''),
    _sessionStartTime: new FormControl<string>(new Date().toTimeString().slice(0, 5)),
    _sessionEndTime: new FormControl<string>(new Date().toTimeString().slice(0, 5)),
    sessionsList: new FormControl<SessionItem[]>([]),
    appointmentType: new FormControl(''),
    acceptBooking: new FormControl(''),
    appointmentDurationMinutes: new FormControl(''),
    consultationCharge: new FormControl(''),
    maxBookingPerSlot: new FormControl(''),
    showAppointmentInfo: new FormControl(false),
  });

  handleClose() {
    this.onClose.emit();
  }

  onAddSessionDay(day: string) {
    if (this.form.value._days?.includes(day)) return;

    this.form.patchValue({
      _days: [...(this.form.value._days || []), day],
    });
  }

  onRemoveSessionDay(day: string) {
    if (!this.form.value._days?.includes(day)) return;

    this.form.patchValue({
      _days: this.form.value._days?.filter((d) => d !== day),
    });
  }

  onResetSessionItem() {
    const now = new Date();
    const sessionDefaultValue = now.toTimeString().slice(0, 5);

    this.form.patchValue({
      _days: [],
      _sessionName: '',
      _sessionStartTime: sessionDefaultValue,
      _sessionEndTime: sessionDefaultValue,
    });
  }

  onAddFormSessionItem() {
    this.form.patchValue({
      sessionsList: [
        ...(this.form.value.sessionsList || []),
        {
          id: nanoid(),
          name: this.form.value._sessionName || '',
          startTime: this.form.value._sessionStartTime || '',
          endTime: this.form.value._sessionEndTime || '',
          days: this.form.value._days || [],
        },
      ],
    });

    this.onResetSessionItem();
  }

  onRemoveFormSessionItem(id: string) {
    this.form.patchValue({
      sessionsList: [...(this.form.value.sessionsList?.filter((item) => item.id !== id) || [])],
    });
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
