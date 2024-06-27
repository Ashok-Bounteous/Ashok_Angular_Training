import { Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { MyComponent } from './my-component/my-component.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ParentModule } from './parent/parent.module';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        // children: [{path: 'hello',  component: ParentComponent, outlet: 'foo'},
        // ]
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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }