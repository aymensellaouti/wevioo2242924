import { Component } from '@angular/core';
import { User } from 'src/app/auth/services/auth.service';



@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css']
})
export class OnPushComponent {
updateEmail(newEmail: string) {
  this.user = { ...this.user, email: newEmail };
}

  name = 'aymen';

  user: User =  {id: "1", email: 'aymen@gmail.com'};
}
