import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushComponent {

  @Input() name = "";
  @Input() user: User = {id: "0", email: "" };

constructor() {
    let i = 1;
    const index = setInterval(() => {
      this.name = this.name + i++;
      if (i == 4) {
        clearInterval(index);
      }
    }, 1500);
}
}
