import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-from-of',
  templateUrl: './from-of.component.html',
  styleUrls: ['./from-of.component.css']
})
export class FromOfComponent {
  tab = [1,2,3,4,5,6];

  of$ = of(this.tab).subscribe(data => {
    console.log('[of ]');
    console.log(data);
  })
  from$ = from(this.tab).subscribe(data => {
    console.log('[from ]');
    console.log(data);
  })
}
