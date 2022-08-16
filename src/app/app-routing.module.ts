import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [

{path:'',component: HomeComponent},
{path:'sobre',component:SobreComponent},
{path:'personagens',component:PersonagensComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
