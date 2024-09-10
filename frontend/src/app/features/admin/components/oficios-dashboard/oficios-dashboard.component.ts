import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oficios-dashboard',
  templateUrl: './oficios-dashboard.component.html',
  styleUrls: ['./oficios-dashboard.component.css'],
  standalone: true,
  imports: [
    AsyncPipe,
    CardModule,
    MenuModule,
    ButtonModule,
    CommonModule
  ]
})
export class OficiosDashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 12, rows: 1 },
          { title: 'Card 2', cols: 12, rows: 1 },
          { title: 'Card 3', cols: 12, rows: 1 },
          { title: 'Card 4', cols: 12, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 6, rows: 1 },
        { title: 'Card 2', cols: 3, rows: 1 },
        { title: 'Card 3', cols: 3, rows: 2 },
        { title: 'Card 4', cols: 3, rows: 1 }
      ];
    })
  );
}
