import { Component, signal } from '@angular/core';
import { User } from '../shared/modeled/user.model';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  user = signal<User>({
    id: 'id1',
    name: 'maggie',
    avatar: 'image'
  })


  isLoggedIn = signal<boolean>(false);
}
