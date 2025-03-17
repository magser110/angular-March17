import { Component, signal } from '@angular/core';
import { User } from '../shared/modeled/user.model';


@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  user = signal<User>({
    id:'ul',
    name: 'me',
    avatar: ''
  })
}
