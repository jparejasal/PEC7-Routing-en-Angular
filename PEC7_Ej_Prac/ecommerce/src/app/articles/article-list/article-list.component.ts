import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/article';
import { ArticleServiceService } from '../../services/article-service.service';
import { Observable } from 'rxjs-compat/Observable';

// Creación del componente article-list.
@Component({  
  selector: 'app-article-list',

  // Template de línea.
  template: `
    <div id="product" class="stock-container" [class]="article.isOnSale ? 'disponible' : 'noDisponible'" *ngFor="let article of articles$ | async">
      <div>
          <img [src]="article.imageUrl | imagenURL" alt="car">
      </div>
      <div class="name"><h3>{{article.name}}</h3></div>
      <div class="price">{{article.price | currency:'EUR'}}</div>
      <div class="amount" *ngIf="article.isOnSale">
        <button (click)="this.disminuirStock(article.id)" [disabled]="article.quantityInCart == 0">-</button>
            <span> {{article.quantityInCart}} </span>
        <button (click)="this.aumentarStock(article.id)">+</button>
      </div>     
    </div>
  `,
  /* Estilos de línea  */
  styles: `
  /* Estilos para contenedor de la información del artículo  */    
   .stock-container {
    border: 1px solid black;
    border-radius: 5px;
    display: inline-block;
    padding: 10px;
    height: 15%;
    width: 15%;
  }

  /* Estilos para nombre del artículo */
  .stock-container .name h3, .stock-container .name h4 {
    display: inline-block;
  }

  /* Estilos para imágenes de los artículos */
  img { 
    width: 200px;
    height: 200px;
    object-fit: contain;
  }

  /* Clase que indica estilos a aplicar si un artículo se encuentra disponible para la venta */
  .disponible {    
    color: black    
  }

  /* Clase que indica estilos a aplicar si un artículo no se encuentra disponible para la venta */
  .noDisponible {
    background-color: red;
    color: grey;
  }
  `
})

// Clase principal del componente article-list
export class ArticleListComponent implements OnInit {

  // Representa un array de tipo modelo article
  public articles: Array<Article>
  public articles$: Observable<Article[]>
  
  constructor(private articleService: ArticleServiceService) { }
  
  // Inicialización de componente con datos a mostrar.
  ngOnInit() {    
    this.articles$ = this.articleService.getArticles();   
  } 

  // Método modificado para aumentar stock de un artículo específico.
  aumentarStock(articleId:number): void {
    for(let a of this.articles) {
      if(a.id == articleId) {        
        a.quantityInCart++;
      }
    }                              
  }  

  // Método modificado para decrementar stock de un artículo específico.
  disminuirStock(articleId:number): void {
    for(let a of this.articles) {
      if(a.id == articleId) {
        this.articleService.changeQuantity(a.id, a.quantityInCart++);
        a.quantityInCart--;
      }
    }                                   
  }  
}
