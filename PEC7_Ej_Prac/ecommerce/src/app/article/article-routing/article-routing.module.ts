import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from '../../articles/article-list/article-list.component';
import { ArticleNewTemplateComponent } from '../../articles/article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from '../../articles/article-new-reactive/article-new-reactive.component';
import { authGuard } from '../../guards/auth.guard';

const routes: Routes = [     
  {path:'', component:ArticleListComponent, canActivate: [authGuard]},
  {path:'', component:ArticleNewTemplateComponent, canActivate: [authGuard]},
  {path:'', component:ArticleNewReactiveComponent, canActivate: [authGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
