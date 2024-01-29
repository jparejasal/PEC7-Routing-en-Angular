import { AbstractControl } from '@angular/forms';

// Clase para validaciones personalizadas
export class misValidaciones {
    // Validación para nombres prohibidos.
    static NameArticleValidator(control: AbstractControl) {
        const name = control.value;
        if(name == "Prueba" || name == "Test" || name == "Mock" || name == "Fake") {
            return {invalidName:true};
        }
        return null;
    }
}
