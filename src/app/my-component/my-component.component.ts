import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { UserDataService, User } from '../services/user-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponent implements OnInit, OnDestroy {
  users: User[] = [];
  value = 'sample String.';
  private userSubscription!: Subscription;

  constructor(
    private userDataService: UserDataService,
    private cdRef: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log("ONINIT");
    this.userSubscription = this.userDataService.getUsers().subscribe((data) => {
      this.users = data // Add new user to users array
      // console.log('New user added here :', user);
      // console.log("The complete array is : ",this.users);

      // Trigger change detection manually
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      console.log("Destroy!!!");
      this.userSubscription.unsubscribe();
    }
  }
}
