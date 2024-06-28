
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes'; // Adjust the path as necessary
import { ItemListComponent } from './item-list/item-list.component'; // Import the standalone component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tutorial';
  newUser: { id: number, name: string, email: string } | null = null;

  onUserAdded(user: { id: number, name: string, email: string }): void {
    this.newUser = user;
  }
}