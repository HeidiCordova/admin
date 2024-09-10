import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    AsyncPipe,
    ChartModule,
    TableModule,
    CardModule,
    ButtonModule,
    MenuModule,
    CommonModule
  ]
})
export class DashboardComponent implements OnInit {
  totalCategorias!: number;
  totalOficios!: number;
  totalUsuarios!: number;

  categoriasChartData: any;
  oficiosChartData: any;
  ultimosUsuarios!: any[];
  displayedColumns: string[] = ['nombre', 'email', 'rol', 'fechaRegistro'];

  ngOnInit() {
    // Datos de ejemplo
    this.totalCategorias = 5;
    this.totalOficios = 10;
    this.totalUsuarios = 100;

    // Datos para los gráficos de ejemplo
    this.categoriasChartData = {
      labels: ['Tecnología', 'Educación', 'Salud', 'Ingeniería', 'Artes'],
      datasets: [
        {
          data: [300, 50, 100, 200, 80],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#F7464A']
        }
      ]
    };

    this.oficiosChartData = {
      labels: ['Desarrollador', 'Profesor', 'Médico', 'Ingeniero', 'Artista'],
      datasets: [
        {
          data: [120, 100, 140, 60, 90],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#F7464A']
        }
      ]
    };

    // Datos de usuarios de ejemplo
    this.ultimosUsuarios = [
      { nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'Solicitante', fechaRegistro: new Date() },
      { nombre: 'Ana Gómez', email: 'ana@example.com', rol: 'Oferente', fechaRegistro: new Date() },
      { nombre: 'Carlos López', email: 'carlos@example.com', rol: 'Admin', fechaRegistro: new Date() }
    ];
  }
}

