import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriasService } from '../../service/categorias.service';
import { Categoria } from './categoria.model';

// PrimeNG modules
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias-dashboard',
  templateUrl: './categorias-dashboard.component.html',
  styleUrls: ['./categorias-dashboard.component.css'],
  standalone: true,
  imports: [
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CategoriasDashboardComponent implements OnInit {
  categoriaForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private fb: FormBuilder, 
    private categoriasService: CategoriasService
  ) {
    this.categoriaForm = this.fb.group({
      nombre: [''],
      descripcion: ['']
    });
  }

  ngOnInit(): void {
    console.log('CategoriasDashboardComponent ha sido inicializado');
    this.loadCategorias();
  }

  onSubmit(): void {
    if (this.categoriaForm.valid) {
      this.categoriasService
        .addCategoria(new Categoria(
          null,
          this.categoriaForm.value.nombre,
          this.categoriaForm.value.descripcion
        ))
        .subscribe((response) => {
          console.log('Categoría añadida:', response);
          this.loadCategorias();
        });
    }
  }

  loadCategorias(): void {
    this.categoriasService.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  deleteCategoria(category: Categoria): void {
    this.categoriasService.deleteCategoria(category.id!).subscribe(() => {
      this.loadCategorias();
    });
  }
}
