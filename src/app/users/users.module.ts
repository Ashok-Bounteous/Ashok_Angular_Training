import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    UserListComponent,
    UserPostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'users', component: UserListComponent },
      { path: 'user-posts/:userId', component: UserPostsComponent }
    ])
  ],
  providers: [
    DataService
  ]
})
export class UsersModule { }
