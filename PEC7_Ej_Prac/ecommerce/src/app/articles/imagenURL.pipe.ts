import { Pipe, PipeTransform } from '@angular/core';

@Pipe({    
    name: 'imagenURL'
  })

  export class imagenURLPipe implements PipeTransform {
    transform(url: string): string {
        if(url.length == 0) {
            return "./assets/img/carLogo.png";
        }
        else {
            return url;
        }
      }
  }

