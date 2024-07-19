import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class OverviewComponent {
  public title = 'Jelte Wiersma - Software Bastards';

  private breakpointObserver = inject(BreakpointObserver);

  public myObservable = new Subject<any>();
  
  private smallViewGrid;
  private largeViewGrid;


  constructor() {

    this.myObservable.subscribe((val) => {
      this.largeViewGrid = val;
      console.log('new value:', val);
    });

    this.largeViewGrid = [
      { title: 'Card 1', cols: 2, rows: 1 },
      { title: 'Card 2', cols: 1, rows: 2 },
      { title: 'Card 3', cols: 1, rows: 1 },
      { title: 'Card 4', cols: 1, rows: 1 }
    ];

    this.smallViewGrid = [
      { title: 'Card 1', cols: 2, rows: 1 },
      { title: 'Card 2', cols: 2, rows: 1 },
      { title: 'Card 3', cols: 2, rows: 1 },
      { title: 'Card 4', cols: 2, rows: 1 }
    ];
    
    setTimeout(() => {
      this.myObservable.next([
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 2 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 2 }
      ]);
    }, 2000);

  }

  /** Based on the screen size, switch from standard to one column per row */
  public cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.smallViewGrid 
      }
      
      return this.largeViewGrid;
    })
  );
}
