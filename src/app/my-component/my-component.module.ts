import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding
import { MyComponent } from './my-component.component';
import { MyCustomPipe } from '../pipes/my-custom.pipe'; // Import your custom pipe if it's in the same module

@NgModule({
  declarations: [
    MyComponent,
    MyCustomPipe // Declare your custom pipe here
  ],
  imports: [
    CommonModule,
    FormsModule // Import FormsModule for ngModel binding
    // Add other modules as needed, e.g., HttpClientModule for HTTP requests
  ],
  exports: [
    MyComponent
    // Optionally export components if you plan to use them in other modules
  ]
})
export class MyComponentModule { }
