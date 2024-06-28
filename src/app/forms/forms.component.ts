// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-forms',
//   templateUrl: './forms.component.html',
//   styleUrls: ['./forms.component.scss']
// })
// export class FormsComponent implements OnInit {
//   // Reactive Form - !: says that the form will have data loaded with later.
//   reactiveForm!: FormGroup;

//   ngOnInit(): void {
//     this.reactiveForm = new FormGroup({
//       name: new FormControl('', [Validators.required, Validators.minLength(3)]),
//       email: new FormControl('', [Validators.required, Validators.email])
//     });
//   }

//   // Template-Driven Form Submission
//   onTemplateSubmit(form: any): void {
//     console.log('Template-Driven Form Data: ', form.value,'\nName is : ',form.value.name);
//     alert('The form data is successfully sublitted!!!')
//   }

//   // Reactive Form Submission
//   onReactiveSubmit(): void {
//     console.log('Reactive Form Data: ', this.reactiveForm.value);
//     alert('The form data is successfully sublitted!!!')

//   }
// }
/*  This is the old Program   */





import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  @Output() userAdded = new EventEmitter<{ id: number, name: string, email: string }>();

  reactiveForm: FormGroup;
  showTemplateForm = true;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  toggleForm(): void {
    this.showTemplateForm = !this.showTemplateForm;
  }

  onTemplateSubmit(form: any): void {
    if (form.valid) {
      this.userAdded.emit(form.value);
    }
  }

  onReactiveSubmit(): void {
    if (this.reactiveForm.valid) {
      this.userAdded.emit(this.reactiveForm.value);
    }
  }
}