// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// // import { AppComponent } from './app.component';
// import { CommonModule } from '@angular/common';
// import { ItemListComponent } from './item-list/item-list.component';
// import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
// import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
// import { MyComponent } from './my-component/my-component.component';

// @NgModule({
//   declarations: [ItemListComponent, MyComponent],
//   imports: [
//     BrowserModule,
//     CommonModule,
//   ],
//   bootstrap: []
// })
// export class AppModule { }




import { NgModule, SimpleChange } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { MyComponent } from './my-component/my-component.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { RouterOutlet } from '@angular/router';
import { ParentModule } from './parent/parent.module';
import { MyServiceService } from './services/my-service.service';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HighlighterDirective } from './directives/highlighter.directive';

@NgModule({
  declarations: [
    ItemListComponent,
    MyComponent,
    AppComponent,
    FormsComponent,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ParentModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
  ],
  providers:[MyServiceService, DatePipe],
  bootstrap: [AppComponent] 
})
export class AppModule { }