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




// forms.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService, User } from '../services/user-data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  reactiveForm: FormGroup;
  showTemplateForm = true;

  constructor(private fb: FormBuilder, private userDataService: UserDataService) {
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
      this.userDataService.addUser(form.value as User);
      console.log("Got : ",form.value);
      form.resetForm(); // Optional: Reset the form after submission
    }
  }

  onReactiveSubmit(): void {
    if (this.reactiveForm.valid) {
      this.userDataService.addUser(this.reactiveForm.value as User);
      console.log("Got : ",this.reactiveForm.value);
      this.reactiveForm.reset(); // Optional: Reset the form after submission
    }
  }
}
