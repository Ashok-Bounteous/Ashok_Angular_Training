import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../services/data.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  posts: any[] = [];
  errorMessage: string = '';

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (error) => this.errorMessage = error
    });
  }
}
