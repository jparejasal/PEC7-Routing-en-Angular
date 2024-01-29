import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticleServiceService } from '../../services/article-service.service';
import { Article } from '../../model/article';

// Importación de custom validations
import { misValidaciones } from './../../../util/misValidaciones';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {

  public article: Article;
  public message = null; 

  articleReactiveForm = this.formBuilder.group({
    id: ['', [Validators.required, Validators.pattern('[0-9]+([\.,][0-9]+)?')]],
    nombre: ['', [Validators.required, misValidaciones.NameArticleValidator]],
    precio: ['', [Validators.required, Validators.pattern('[0-9]+([\.,][0-9]+)?'), Validators.min(0.1)]],
    cantidad: ['', [Validators.required, Validators.pattern('[0-9]+([\.,][0-9]+)?'), Validators.min(0)]],
    //URLimagen: ['', [Validators.required, Validators.pattern('https?://.+')]],
    URLimagen: ['', [Validators.pattern('https?://.+')]],
    venta: [''],   
  });
  registrado = false;
  
  constructor(private formBuilder: FormBuilder, private articleService: ArticleServiceService) {
    this.article = new Article(0, "", "", 0, false, 0);
  }

  createArticle(articleReactiveForm) {
    if (articleReactiveForm.valid) {
      this.article = new Article(parseInt(this.articleReactiveForm.get('id').value.toString()), this.articleReactiveForm.get('nombre').value.toString(), this.articleReactiveForm.get('URLimagen').value.toString(), parseFloat(this.articleReactiveForm.get('precio').value.toString()), Boolean(this.articleReactiveForm.get('venta').value), parseInt(this.articleReactiveForm.get('cantidad').value.toString()));     
      let created = this.articleService.createArticle(this.article).subscribe((result: any)=> {
        this.message = result.msg;
        this.article =  new Article(parseInt(this.articleReactiveForm.get('id').value.toString()), this.articleReactiveForm.get('nombre').value.toString(), this.articleReactiveForm.get('URLimagen').value.toString(), parseFloat(this.articleReactiveForm.get('precio').value.toString()), Boolean(this.articleReactiveForm.get('venta').value), parseInt(this.articleReactiveForm.get('cantidad').value.toString()));
        }, (err) => {
          this.message = err.msg;
        });      
    } else {
      console.error('El formulario se encuentra en estado inválido');
    }
  }  
}
