import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleNewTemplateComponent } from './articles/article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './articles/article-new-reactive/article-new-reactive.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { authGuard } from './guards/auth.guard';

// Intento de crear rutas para lazy loading
const myroutes: Routes = [   
  {path:'user', loadChildren:()=>import('./user/user-routing/user-routing.module').then(m=>m.UserRoutingModule)},
  {path:'article', loadChildren:()=>import('./article/article-routing/article-routing.module').then(m=>m.ArticleRoutingModule)},  
];

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'Articulos', component:ArticleListComponent, canActivate: [authGuard]},
  {path:'crearArticuloTemplate', component:ArticleNewTemplateComponent, canActivate: [authGuard]},
  {path:'crearArticuloReactive', component:ArticleNewReactiveComponent, canActivate: [authGuard]},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
