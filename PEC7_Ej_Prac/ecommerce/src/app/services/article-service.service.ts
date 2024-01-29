import { Injectable } from '@angular/core';
import { Article } from './../model/article';
import { Observable } from 'rxjs-compat/Observable';
import { _throw as ObservableThrow} from 'rxjs-compat/observable/throw';
import { of as ObservableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  // Representa un array de tipo modelo article
  private articles: Article[];

  constructor() {
    // Inicialización de componente con datos a mostrar.
    this.articles = [
      new Article(1, "Carro Azul", "./assets/img/bluecar.png", 50, true, 2),
      new Article(2, "Black Citroen", "./assets/img/black-citroen-ds5.png", 50, true, 5),
      new Article(3, "Alfa Romeo", "./assets/img/alfa-romeo.png", 50, false, 0)
    ]
  }

  getArticles(): Observable<Article[]> {
    return ObservableOf(this.articles);
  }

  createArticle(article: Article): Observable<any> {
    let foundArticle = this.articles.find(each => each.id === article.id);
    if (foundArticle) {
      return ObservableThrow({msg: 'Artículo con código ' + article.id + ' ya existe'});      
    }
    this.articles.push(article);
    return ObservableOf({msg: 'Artículo con código ' + article.id+ ' creado exitosamente'});    
  }

  changeQuantity(articleID: number, chagenInQuantity: number): Observable<Article> {
    let foundArticle = this.articles.find(each => each.id === articleID);
    if (foundArticle) {
      foundArticle.quantityInCart = chagenInQuantity;
      return ObservableOf(foundArticle);      
    }
  }
}
