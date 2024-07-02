import { Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { MyComponent } from './my-component/my-component.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ParentModule } from './parent/parent.module';
import { FormsComponent } from './forms/forms.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { ObservablesComponent } from './observables/observables.component';

export const routes: Routes = [
    {
        path: '',
        // component: AppComponent,
        // children: [{path: 'hello',  component: ParentComponent, outlet: 'foo'},
        // ]
        redirectTo: '/TS', 
        pathMatch: 'full'
    },
    {
        path: 'TS',
        component: ItemListComponent,
        // outlet: 'primary'
    },
    {
        path: 'new',
        component: MyComponent,
        // outlet: 'primary'
    },
    {
        path: 'ParentChild',
        component: ParentComponent,
        // outlet: 'secondary'
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'httpClient',
        component: HttpClientComponent
    },
    {
        path: 'observables',
        component: ObservablesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }