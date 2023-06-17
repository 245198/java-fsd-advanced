import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'retrieve', component: RetrieveComponent},
  {path: '', component: RetrieveComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'update/:id',component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }