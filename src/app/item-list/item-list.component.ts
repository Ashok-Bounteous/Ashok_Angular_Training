// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Import CommonModule

// @Component({
//   selector: 'app-item-list',
//   templateUrl: './item-list.component.html',
//   styleUrls: ['./item-list.component.scss'],
//   // standalone: true,
//   imports: [CommonModule] // Add CommonModule to the imports array
// })
// export class ItemListComponent {
//   items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

//   constructor() {}

//   addItem(newItem: string) {
//     if (newItem) {
//       this.items.push(newItem);
//     }
//   }
// }


// item-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit{
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  today: Date;
  message: string = 'NULL';

  constructor(private myService: MyServiceService) {
    this.today = new Date();
  }

  
  ngOnInit(): void {
    this.message = this.myService.getData();
  }

  addItem(newItem: string) {
    if (newItem) {
      this.items.push(newItem);
    }
  }
}