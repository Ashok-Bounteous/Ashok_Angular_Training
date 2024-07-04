import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  userId: number = 0;
  posts: any[] = [];
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('userId')!;
    this.dataService.getUserPosts(this.userId).subscribe({
      next: (data) => this.posts = data,
      error: (error) => this.errorMessage = error
    });
  }

  backToUsers(): void {
    this.router.navigate(['/users']);
  }
}
