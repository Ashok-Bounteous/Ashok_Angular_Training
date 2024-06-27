import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  showChild = true; // Property to control the visibility of the child component
  parentData = 'Initial Parent Data'; // Property to hold data passed to the child component
  currentInput = ''; // Property to hold the current input value being typed
  imageUrl = 'https://th.bing.com/th?id=OIP.amEbZWd9JRcIxkyVtYNODwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'; // Property to hold the image URL

  // Method to toggle the visibility of the child component
  toggleChild() {
    this.showChild = !this.showChild;
  }

  // Method to update the data passed to the child component
  updateParentData() {
    this.parentData = this.currentInput;
  }




  isActive = true; // Property to control the active class
  classes = { 'active': true, 'highlight': false }; // Object to control multiple classes

  toggleClasses() {
    this.isActive = !this.isActive;
    this.classes.active = !this.classes.active;
    this.classes.highlight = !this.classes.highlight;
  }



  isDisabled = true; // Property to control the disabled attribute
  ariaLabel = 'Button Label'; // Property to control the aria-label attribute

  toggleAttributes() {
    this.isDisabled = !this.isDisabled;
    this.ariaLabel = this.isDisabled ? 'Button Disabled' : 'Button Enabled';
  }
}