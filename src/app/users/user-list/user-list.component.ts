import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  errorMessage: string = '';
  searchQuery: string = '';

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
      },
      error: (error) => this.errorMessage = error
    });
  }

  onSearch(query: string): void {
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(query.toLowerCase()) || 
      user.username.toLowerCase().includes(query.toLowerCase())
    );
  }

  viewPosts(userId: number): void {
    this.router.navigate(['/user-posts', userId]);
  }
}
