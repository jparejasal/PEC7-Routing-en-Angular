import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public formularioRegistro: FormGroup;
  public userExists: boolean;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.formularioRegistro = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  registrarUsuario(formularioRegistro: FormGroup) {
    this.http.post<any>('http://localhost:3000/formularioRegistro', this.formularioRegistro.value).subscribe(res => {
      alert("Registro exitoso");
      this.formularioRegistro.reset();
      this.router.navigate(['login']);
    }, err => {
      alert("Error en el registro");
    })
  }
}

