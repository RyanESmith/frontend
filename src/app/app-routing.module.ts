import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEntityComponent } from './sample/add-entity/add-entity.component';
import { EditEntityComponent } from './sample/edit-entity/edit-entity.component';
import { DashboardComponent } from './sample/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch: 'full'},
  {path: 'add-entity/:type', component: AddEntityComponent},
  {path: 'edit-entity/:type/:id', component: EditEntityComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
