import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public formularioLogin: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {   
    this.formularioLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', Validators.required],
    });
  }

  login(formularioLogin: FormGroup) {
    this.http.get<any>('http://localhost:3000/formularioRegistro').subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === formularioLogin.value.username && a.password === formularioLogin.value.password;
      });
      if (user) {
        alert("Ingreso de usuario exitoso");
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
        this.formularioLogin.reset();        
        this.router.navigate(['Articulos']);
      }
      else {
        alert("Usuario no registrado");
      }
    }, err => {
      alert("Error en el ingreso de usuario");
    })
  }
}
