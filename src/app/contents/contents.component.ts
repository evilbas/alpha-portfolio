import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Mon Dossier', cols: 2, rows: 5 },
        ];
      }

      return [
        { title: 'Mon Dossier', cols: 2, rows: 5 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
