import { Component } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})
export class ArticleNewTemplateComponent {
  public article: Article;

  constructor() {
    this.article = new Article(5, "Carro Azul", "./assets/img/bluecar.png", 50, true, 0);
  }
  registrado=false;

  createArticleTemplate(articleTemplateForm) {
    console.log('formulario artículo template', articleTemplateForm.value);
    if (articleTemplateForm.valid) {
      this.article = articleTemplateForm.value.article;
      console.log('Creando artículo template ', this.article);      
    } else {      
      console.error('formulario artículo template es inválido');
    }
  }  
}
