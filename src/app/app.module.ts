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
import { HttpClientModule } from '@angular/common/http';
import { HttpClientComponent } from './http-client/http-client.component';
import { ObservablesComponent } from './observables/observables.component';
import { MyComponentModule } from './my-component/my-component.module';

@NgModule({
  declarations: [
    ItemListComponent,
    // MyComponent,
    AppComponent,
    FormsComponent,
    HighlighterDirective,
    HttpClientComponent,
    ObservablesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    ParentModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MyComponentModule
  ],
  exports:[
  ],
  providers:[MyServiceService, DatePipe],
  bootstrap: [AppComponent] 
})
export class AppModule { }